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

  // Handle Run: update current config
  const handleRun = () => {
    setCurrentConfig({ model: pendingModel, methods: pendingMethods });
    setSelectedModel(pendingModel);
    setSelectedMethods(pendingMethods);
    setTerminalScript(generateTerminalScript(pendingModel, pendingMethods));
  };

  // Get stats for current config
  const configLabel = getConfigLabel(currentConfig.methods);
  const stats = (STATS_PRESETS[currentConfig.model] && STATS_PRESETS[currentConfig.model][configLabel]) || { accuracy: 0, memory: 0, latency: 0, power: 0 };

  return (
    <div className="products-page">
      <div className="products-intro">
        <div className="products-intro-content">
          <h1 style={{ textAlign: 'left' }}>Model Compression Made Intuitive</h1>
          <p style={{ textAlign: 'justify' }}>
            Our platform guides you step-by-step, making advanced compression techniques like quantization and pruning as simple as clicking a button. No need to be a deep learning expert—just select your model, choose your goals, and let our engine do the rest. Experience how easy and intuitive model compression can be!
          </p>
        </div>
      </div>
      <section className="products-cards-section">
        <div className="products-cards-grid">
          {/* Upper Left: Current Model Configuration (fills grid cell) */}
          <div className="products-card products-card--left products-card--top products-dashboard-card" style={{padding: 0, boxShadow: '0 4px 24px rgba(10, 26, 47, 0.15)', display: 'flex', flexDirection: 'column', justifyContent: 'stretch', height: '100%'}}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', flex: 1 }}>
              <div style={{ marginBottom: '1.2rem', padding: '2rem 2rem 0 2rem' }}>
                <h3 style={{ margin: 0, fontWeight: 700, textAlign: 'justify', flex: 1 }}>Current Model Configuration</h3>
              </div>
              <div className="products-config-row" style={{ justifyContent: 'center', textAlign: 'center', padding: '0 2rem' }}>
                <div><span className="products-config-label">Model:</span> {currentConfig.model}</div>
                <div><span className="products-config-label">Compression Level:</span> {getConfigLabel(currentConfig.methods)}</div>
                <div><span className="products-config-label">Weight Precision:</span> {currentConfig.methods.includes('Quantization') ? 'INT8 (25%)' : 'FP32'}</div>
              </div>
              <div className="products-stats-row" style={{padding: '0 2rem 2rem 2rem', justifyContent: 'center'}}>
                <div className="products-stat-card products-stat-accuracy">
                  <div className="products-stat-label">Accuracy</div>
                  {stats.accuracy}%
                </div>
                <div className="products-stat-card products-stat-memory">
                  <div className="products-stat-label">Memory (MB)</div>
                  {stats.memory}
                </div>
                <div className="products-stat-card products-stat-latency">
                  <div className="products-stat-label">Latency (ms)</div>
                  {stats.latency}
                </div>
                <div className="products-stat-card products-stat-power">
                  <div className="products-stat-label">Power (mW)</div>
                  {stats.power}
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem', width: '100%' }}>
                <button className="products-run-btn run-inside" onClick={handleRun}>Run</button>
              </div>
            </div>
          </div>
          {/* Upper Right: Compression Configuration (fills grid cell) */}
          <div className="products-card products-card--right products-card--top products-dashboard-card" style={{padding: 0, boxShadow: '0 4px 24px rgba(10, 26, 47, 0.15)'}}>
            <div style={{padding: '2rem 2rem 2rem 2rem'}}>
              <h3 style={{ fontWeight: 700, marginBottom: '1.2rem', textAlign: 'justify' }}>Compression Configuration</h3>
              <div style={{ marginBottom: '1.2rem', fontWeight: 600, textAlign: 'justify' }}>1. Select Model</div>
              <div className="products-btn-group" style={{ marginBottom: '2rem' }}>
                {MODELS.map((model) => (
                  <button
                    key={model}
                    className={`products-btn${pendingModel === model ? ' active' : ''}`}
                    onClick={() => setPendingModel(model)}
                  >
                    {model}
                  </button>
                ))}
              </div>
              <div style={{ marginBottom: '1.2rem', fontWeight: 600, textAlign: 'justify' }}>2. Select Compression Method</div>
              <div className="products-btn-group">
                {METHODS.map((method) => (
                  <button
                    key={method}
                    className={`products-btn${pendingMethods.includes(method) ? ' active' : ''}`}
                    onClick={() => handleMethodClick(method)}
                    disabled={pendingMethods.includes('Original') && method !== 'Original'}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* Lower Left: Contact Card */}
          <div className="products-card products-card--left products-card--bottom products-contact-card">
            <div className="products-card-content">
              <h2>Contact Us</h2>
              <p style={{ textAlign: 'justify' }}>
                Want to learn how to integrate our tools into your business? Reach out and our team will get in touch!
              </p>
              <button
                className="products-contact-redirect-btn"
                onClick={() => window.location.href = '/contact'}
              >
                Go to Contact Page
              </button>
            </div>
          </div>
          {/* Lower Right: Terminal Demo Card */}
          <div className="products-card products-card--right products-card--bottom">
            <div className="products-card-content" style={{ textAlign: 'justify', width: '100%', height: '100%' }}>
              <ProductTerminalDemo script={terminalScript} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products; 