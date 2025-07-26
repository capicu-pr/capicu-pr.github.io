import React, { useState } from 'react';
import '../styles/Products.css';
import ProductTerminalDemo from '../components/ProductTerminalDemo';

const MODELS = [
  'ResNet', 'VGG', 'Inception', 'DenseNet', 'MobileNet'
];
const METHODS = [
  'Original', 'Quantization', 'Layer fusion', 'Pruning'
];

// Example stats for each model/config combo
const STATS_PRESETS = {
  'MobileNet': {
    'Original': { accuracy: 79, memory: 120, latency: 75, power: 43 },
    'Quantization': { accuracy: 74, memory: 40, latency: 60, power: 25 },
    'Layer fusion': { accuracy: 77, memory: 100, latency: 50, power: 35 },
    'Pruning': { accuracy: 70, memory: 30, latency: 65, power: 20 },
    'Quantization+Layer fusion': { accuracy: 73, memory: 20, latency: 45, power: 18 },
  },
  // ... Add similar objects for other models as needed
};

function getConfigLabel(methods) {
  if (methods.includes('Original')) return 'Original';
  if (methods.length === 2 && methods.includes('Quantization') && methods.includes('Layer fusion')) return 'Quantization + Layer fusion';
  return methods.join(' + ');
}

const generateTerminalScript = (model, methods) => {
  // Example: customize script based on model and methods
  const methodStr = methods.length === 0 ? 'original' : methods.join('+').toLowerCase().replace(/ /g, '_');
  const inputLine = `compression-engine --model ${model.toLowerCase()} --config ${methodStr}`;
  const baseScript = [
    { type: 'input', value: inputLine, delay: 60 },
    { type: 'output', value: `[⚙️] Loading model ${model}...`, delay: 600 },
    { type: 'output', value: `[✓] Model loaded: ${model}`, delay: 300 },
  ];
  if (methods.includes('Quantization')) {
    baseScript.push(
      { type: 'output', value: `[⚙️] Applying Quantization (INT8)...`, delay: 600 },
      { type: 'output', value: `[✓] Quantization complete.`, delay: 600 },
    );
  }
  if (methods.includes('Layer fusion')) {
    baseScript.push(
      { type: 'output', value: `[⚙️] Applying Layer Fusion...`, delay: 600 },
      { type: 'output', value: `[✓] Layer Fusion complete.`, delay: 600 },
    );
  }
  if (methods.includes('Pruning')) {
    baseScript.push(
      { type: 'output', value: `[⚙️] Applying Pruning...`, delay: 600 },
      { type: 'output', value: `[✓] Pruning complete.`, delay: 600 },
    );
  }
  baseScript.push(
    { type: 'output', value: `[📊] Evaluating model...`, delay: 800 },
    { type: 'output', value: `[📊] Evaluation Summary`, delay: 400 },
    { type: 'output', value: `  Accuracy:   ...`, delay: 200 },
    { type: 'output', value: `  Latency:    ...`, delay: 200 },
    { type: 'output', value: `  Memory:     ...`, delay: 200 },
    { type: 'output', value: `  Power:      ...`, delay: 200 },
    { type: 'output', value: '', delay: 200 },
    { type: 'output', value: `[💎] Compression complete.`, delay: 200 },
  );
  return baseScript;
};

const Products = () => {
  const [selectedModel, setSelectedModel] = useState('MobileNet');
  const [selectedMethods, setSelectedMethods] = useState(['Quantization', 'Layer fusion']);
  const [pendingModel, setPendingModel] = useState('MobileNet');
  const [pendingMethods, setPendingMethods] = useState(['Quantization', 'Layer fusion']);
  const [currentConfig, setCurrentConfig] = useState({
    model: 'MobileNet',
    methods: ['Quantization', 'Layer fusion'],
  });
  const [terminalScript, setTerminalScript] = useState(generateTerminalScript(currentConfig.model, currentConfig.methods));

  // Handle method selection with exclusivity for 'Original'
  const handleMethodClick = (method) => {
    if (method === 'Original') {
      if (pendingMethods.length === 1 && pendingMethods[0] === 'Original') {
        setPendingMethods([]); // Deselect if already selected
      } else {
        setPendingMethods(['Original']);
      }
    } else {
      setPendingMethods((prev) => {
        let next = prev.filter((m) => m !== 'Original');
        if (prev.length === 1 && prev[0] === 'Original') {
          // If Original was selected, switch to just this method
          next = [method];
        } else if (next.includes(method)) {
          next = next.filter((m) => m !== method);
        } else {
          next = [...next, method];
        }
        return next;
      });
    }
  };

  const handleRun = () => {
    setSelectedModel(pendingModel);
    setSelectedMethods([...pendingMethods]);
    setCurrentConfig({
      model: pendingModel,
      methods: [...pendingMethods],
    });
    setTerminalScript(generateTerminalScript(pendingModel, pendingMethods));
  };

  const currentStats = STATS_PRESETS[selectedModel]?.[getConfigLabel(selectedMethods)] || {
    accuracy: 75, memory: 80, latency: 60, power: 30
  };

  return (
    <div className="products">
      <div className="products-hero">
        <div className="hero-content">
          <h1>AI Model Compression</h1>
          <p>Optimize neural networks for edge deployment with our interactive compression engine</p>
        </div>
      </div>

      <div className="products-section">
        <div className="section-container">
          <div className="config-panel">
            <h2>Configuration</h2>
            
            <div className="config-group">
              <label>Model Architecture</label>
              <div className="model-buttons">
                {MODELS.map((model) => (
                  <button
                    key={model}
                    className={`model-button ${pendingModel === model ? 'selected' : ''}`}
                    onClick={() => setPendingModel(model)}
                  >
                    {model}
                  </button>
                ))}
              </div>
            </div>

            <div className="config-group">
              <label>Compression Methods</label>
              <div className="method-buttons">
                {METHODS.map((method) => (
                  <button
                    key={method}
                    className={`method-button ${pendingMethods.includes(method) ? 'selected' : ''}`}
                    onClick={() => handleMethodClick(method)}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>

            <button className="run-button" onClick={handleRun}>
              Run Compression
            </button>
          </div>

          <div className="terminal-panel">
            <h2>Compression Engine</h2>
            <ProductTerminalDemo script={terminalScript} />
          </div>
        </div>
      </div>

      <div className="products-section">
        <div className="section-container">
          <h2>Performance Metrics</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-value">{currentStats.accuracy}%</div>
              <div className="metric-label">Accuracy</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">{currentStats.memory}MB</div>
              <div className="metric-label">Memory</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">{currentStats.latency}ms</div>
              <div className="metric-label">Latency</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">{currentStats.power}mW</div>
              <div className="metric-label">Power</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products; 