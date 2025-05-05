import { useEffect, useRef, useState } from "react";
import { CheckCircle, Cpu, GaugeCircle, HardDrive, Layers, Zap } from "lucide-react";
import "../styles/TerminalDemo.css";

const PROMPT = "(capicu) user@device $ ";

const demoScript = [
  { type: "input", value: "python compress.py --model SimpleCNN --dataset MNIST --epochs 25 --compression ptq", delay: 60 },
  { type: "output", value: "", delay: 300 },
  { type: "output", value: "🔍 Loading dataset... Done.", delay: 600 },
  { type: "output", value: "🧠 Training baseline model... Done.", delay: 1200 },
  { type: "output", value: "⚡ Applying Compression... Done.", delay: 1200 },
  { type: "output", value: "⚡ Post-training Quantization (INT8)... Done.", delay: 900 },
  { type: "output", value: "", delay: 200 },
  { type: "output", value: "Results:", delay: 200 },
  { type: "output", value: "  Accuracy:     0.66  → 0.62", delay: 120 },
  { type: "output", value: "  Latency:      15ms  → 9ms", delay: 120 },
  { type: "output", value: "  RAM:          800MB → 560MB", delay: 120 },
  { type: "output", value: "  Size:         50MB  → 37.5MB", delay: 120 },
  { type: "output", value: "  Throughput:   1000  → 1500 img/s", delay: 120 },
  { type: "output", value: "", delay: 200 },
  { type: "output", value: "AURORA Score: 0.67", delay: 200 },
];

export default function TerminalDemo() {
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const terminalRef = useRef(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), 750);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    if (step >= demoScript.length) {
      setIsTyping(false);
      return;
    }
    const { type, value, delay } = demoScript[step];
    if (type === "input") {
      let i = 0;
      const typeInterval = setInterval(() => {
        setInput(value.slice(0, i + 1));
        i++;
        if (i === value.length) {
          clearInterval(typeInterval);
          setTimeout(() => {
            setLines((prev) => [...prev, { type: "input", value }]);
            setInput("");
            setStep((s) => s + 1);
          }, 350);
        }
      }, delay);
      return () => clearInterval(typeInterval);
    } else {
      setTimeout(() => {
        setLines((prev) => [...prev, { type: "output", value }]);
        setStep((s) => s + 1);
      }, delay);
    }
  }, [step]);

  const restartDemo = () => {
    setLines([]);
    setInput("");
    setStep(0);
    setIsTyping(true);
  };

  return (
    <div className="terminal-demo-wrapper">
      <div className="terminal-container wide">
        
        <div className="terminal-info-card">
          <div className="feature-icon-grid">
            <div className="feature-icon-block">
              <Cpu size={40} strokeWidth={1.5} />
              <span>Reduce Bit-width of Your Models</span>
            </div>
            <div className="feature-icon-block">
              <Zap size={40} strokeWidth={1.5} />
              <span>Latency Reduction for Real-time Applications</span>
            </div>
            <div className="feature-icon-block">
              <HardDrive size={40} strokeWidth={1.5} />
              <span>Reduce RAM & Storage Requirements</span>
            </div>
            <div className="feature-icon-block">
              <GaugeCircle size={40} strokeWidth={1.5} />
              <span>Adaptive Utility Ranking for Resource-Aware Architectures</span>
            </div>
          </div>
        </div>

        <div className="terminal">                
          <div className="terminal-header">
            <div style={{ display: 'flex' }}>
              <div className="terminal-controls">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <div className="terminal-title">Compression Engine Demo</div>
            </div>
            <div className="terminal-status">
              <span className="terminal-status-dot" /> Running
            </div>
          </div>
          <div className="terminal-body" ref={terminalRef} aria-live="polite">
            <pre style={{ margin: 0 }}>
              {lines.map((line, idx) => (
                <div key={idx} className="terminal-line fade-in">
                  {line.type === "input" ? (
                    <>
                      <span className="terminal-prompt">{PROMPT}</span>
                      {line.value}
                    </>
                  ) : (
                    line.value
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="terminal-line">
                  <span className="terminal-prompt">{PROMPT}</span>
                  {input}
                  {showCursor && <span className="terminal-edit-cursor">|</span>}
                </div>
              )}
            </pre>
          </div>
        </div>
        <div className="terminal-footer">
          <button onClick={restartDemo} className="demo-cta" style={{ marginTop: '1rem' }}>Restart Demo</button>
        </div>
      </div>
    </div>
  );
}
