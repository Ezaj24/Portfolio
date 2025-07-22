import React from 'react';

const Navbar = ({ thanosMode }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h3>Ezaj Shaikh</h3> {/* Replace this with YOUR actual name */}
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#hero" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link">Skills</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          background: ${thanosMode ? 
            'rgba(45, 27, 105, 0.95)' : 
            'rgba(15, 15, 15, 0.95)'
          };
          backdrop-filter: blur(10px);
          border-bottom: 1px solid ${thanosMode ? 
            'rgba(255, 215, 0, 0.3)' : 
            'rgba(64, 64, 64, 0.5)'
          };
          z-index: 999;
          padding: 0.5rem 0;
          transition: all 0.3s ease;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo h3 {
          color: ${thanosMode ? '#ffd700' : '#ffffff'};
          font-size: 1.8rem;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          color: ${thanosMode ? '#f0f0f0' : '#e0e0e0'};
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link:hover {
          color: ${thanosMode ? '#ffd700' : '#ffffff'};
        }

        .nav-link:hover::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: ${thanosMode ? '#ffd700' : '#888'};
        }

        @media (max-width: 768px) {
          .nav-menu {
            gap: 1rem;
          }
          .nav-container {
            padding: 0 1rem;
          }
          .nav-logo h3 {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
