import React, { useState, useEffect, useRef } from 'react';
import '../styles/TerminalDemo.css';

const ProductTerminalDemo = ({ script }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const terminalRef = useRef(null);

  useEffect(() => {
    if (script && script.length > 0) {
      setDisplayedLines([]);
      setCurrentLineIndex(0);
      setIsRunning(true);
    }
  }, [script]);

  useEffect(() => {
    if (!isRunning || currentLineIndex >= script.length) {
      setIsRunning(false);
      return;
    }

    const currentLine = script[currentLineIndex];
    const timer = setTimeout(() => {
      setDisplayedLines(prev => [...prev, currentLine]);
      setCurrentLineIndex(prev => prev + 1);
    }, currentLine.delay);

    return () => clearTimeout(timer);
  }, [currentLineIndex, script, isRunning]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [displayedLines]);

  const formatLine = (line) => {
    if (line.type === 'input') {
      return <span className="terminal-input">$ {line.value}</span>;
    } else {
      return <span className="terminal-output">{line.value}</span>;
    }
  };

  return (
    <div className="terminal-demo">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <div className="terminal-button close"></div>
          <div className="terminal-button minimize"></div>
          <div className="terminal-button maximize"></div>
        </div>
        <div className="terminal-title">Compression Engine</div>
      </div>
      <div className="terminal-body" ref={terminalRef}>
        {displayedLines.map((line, index) => (
          <div key={index} className="terminal-line">
            {formatLine(line)}
          </div>
        ))}
        {isRunning && (
          <div className="terminal-line">
            <span className="terminal-cursor">█</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTerminalDemo; 