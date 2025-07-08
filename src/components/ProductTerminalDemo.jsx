import { useEffect, useRef, useState } from "react";
import "../styles/TerminalDemo.css";

const PROMPT = "(capicu) user@device $ ";

export default function ProductTerminalDemo({ script, onRestart }) {
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
    if (step >= script.length) {
      setIsTyping(false);
      return;
    }
    const { type, value, delay } = script[step];
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
  }, [step, script]);

  const restartDemo = () => {
    setLines([]);
    setInput("");
    setStep(0);
    setIsTyping(true);
    if (onRestart) onRestart();
  };

  return (
    <div className="terminal-demo-wrapper">
      <div className="terminal-container wide">
        <div className="terminal">
          <div className="terminal-header">
            <div style={{ display: 'flex' }}>
              <div className="terminal-controls">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <div className="terminal-title">Compression Engine</div>
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
          <button onClick={restartDemo} className="demo-cta" style={{ marginTop: '1rem' }}>Restart</button>
        </div>
      </div>
    </div>
  );
} 