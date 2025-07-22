import React from 'react';

const Hero = ({ thanosMode }) => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="status-badge">
            <span className="status-dot"></span>
            Ready to Contribute & Learn
          </div>
          <h1 className="hero-title">
            <span>Full-Stack</span>
            <span>Developer</span>
          </h1>
          <p className="hero-description">
            Passionate developer with strong expertise in <strong>C# .NET</strong> and <strong>React.js</strong>. 
            Dedicated to building scalable web applications with clean, efficient code and 
            delivering <strong>high-quality solutions</strong> that exceed expectations.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <h3>Fresh</h3>
              <p>Perspective</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>Dedication</p>
            </div>
            <div className="stat">
              <h3>Fast</h3>
              <p>Learner</p>
            </div>
          </div>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              <span>View Portfolio</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7 14l3-3-3-3v6z"/>
              </svg>
            </a>
            <a href="#contact" className="btn-secondary">
              <span>Let's Connect</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3l1.5 1.5L16 12l-1.5 1.5L2 5v-2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: ${thanosMode ? 
            'radial-gradient(circle at 30% 70%, rgba(255, 215, 0, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(138, 43, 226, 0.1) 0%, transparent 50%)' : 
            'radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)'
          };
        }

        .hero-content {
          text-align: center;
          max-width: 900px;
          padding: 0 2rem;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: ${thanosMode ? 
            'rgba(255, 215, 0, 0.2)' : 
            'rgba(16, 185, 129, 0.2)'
          };
          border: 1px solid ${thanosMode ? 'rgba(255, 215, 0, 0.4)' : 'rgba(16, 185, 129, 0.4)'};
          padding: 0.8rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          font-size: 0.95rem;
          margin-bottom: 2rem;
          color: ${thanosMode ? '#ffd700' : '#10b981'};
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: ${thanosMode ? '#ffd700' : '#10b981'};
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .hero-title {
          font-size: 4.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          letter-spacing: -1px;
        }

        .hero-title span {
          display: block;
          background: ${thanosMode ? 
            'linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #fff700 100%)' : 
            'linear-gradient(135deg, #ffffff 0%, #e5e7eb 50%, #ffffff 100%)'
          };
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.4rem;
          margin-bottom: 3rem;
          color: ${thanosMode ? '#f0f0f0' : '#d1d5db'};
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.8;
        }

        .hero-description strong {
          color: ${thanosMode ? '#ffd700' : '#3b82f6'};
          font-weight: 700;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin: 3rem 0;
          padding: 2rem;
          background: ${thanosMode ? 
            'rgba(255, 215, 0, 0.1)' : 
            'rgba(255, 255, 255, 0.05)'
          };
          border-radius: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid ${thanosMode ? 'rgba(255, 215, 0, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
        }

        .stat {
          text-align: center;
        }

        .stat h3 {
          font-size: 2.2rem;
          font-weight: 800;
          color: ${thanosMode ? '#ffd700' : '#3b82f6'};
          margin-bottom: 0.5rem;
        }

        .stat p {
          color: ${thanosMode ? '#f0f0f0' : '#9ca3af'};
          font-weight: 600;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary, .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 16px 32px;
          border-radius: 30px;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .btn-primary {
          background: ${thanosMode ? 
            'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)' : 
            'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
          };
          color: ${thanosMode ? '#000' : '#fff'};
          box-shadow: 0 10px 25px ${thanosMode ? 'rgba(255, 215, 0, 0.3)' : 'rgba(59, 130, 246, 0.3)'};
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px ${thanosMode ? 'rgba(255, 215, 0, 0.4)' : 'rgba(59, 130, 246, 0.4)'};
        }

        .btn-secondary {
          background: transparent;
          border: 2px solid ${thanosMode ? '#ffd700' : '#10b981'};
          color: ${thanosMode ? '#ffd700' : '#10b981'};
        }

        .btn-secondary:hover {
          background: ${thanosMode ? '#ffd700' : '#10b981'};
          color: ${thanosMode ? '#000' : '#fff'};
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }
          .hero-description {
            font-size: 1.2rem;
          }
          .hero-stats {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .stat h3 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
