import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [thanosMode, setThanosMode] = useState(false);
  const [isSnapping, setIsSnapping] = useState(false);

  const toggleThanosMode = () => {
    setIsSnapping(true);
    
    // Snap animation duration
    setTimeout(() => {
      setThanosMode(!thanosMode);
      setIsSnapping(false);
    }, 600);
  };

  return (
    <div className={`App ${thanosMode ? 'thanos-mode' : ''} ${isSnapping ? 'snapping' : ''}`}>
      {/* Thanos Infinity Gauntlet */}
      <button 
        className={`gauntlet-btn ${isSnapping ? 'snapping' : ''}`}
        onClick={toggleThanosMode}
        title="Snap to Toggle Hero Mode"
        disabled={isSnapping}
      >
        <span className="gauntlet-gems">
          <span className="gem gem-power"></span>
          <span className="gem gem-space"></span>
          <span className="gem gem-reality"></span>
          <span className="gem gem-soul"></span>
          <span className="gem gem-time"></span>
          <span className="gem gem-mind"></span>
        </span>
        👊
      </button>
      
      {isSnapping && <div className="snap-effect"></div>}
      
      <Navbar thanosMode={thanosMode} />
      <Hero thanosMode={thanosMode} />
      <About thanosMode={thanosMode} />
      <Skills thanosMode={thanosMode} />
      <Projects thanosMode={thanosMode} />
      <Contact thanosMode={thanosMode} />
    </div>
  );
}

export default App;
