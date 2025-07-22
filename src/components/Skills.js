import React from 'react';

const Skills = ({ thanosMode }) => {
  const techStack = {
    "Core Technologies": {
      skills: [
        { name: "C# .NET Core", level: 90, years: "2+" },
        { name: "JavaScript ES6+", level: 85, years: "2+" },
        { name: "SQL Server", level: 80, years: "1.5+" },
        { name: "React.js", level: 88, years: "1.5+" },
        { name: "HTML5 & CSS3", level: 92, years: "2+" }
      ],
      icon: "🚀",
      color: thanosMode ? "#ffd700" : "#3b82f6"
    },
    "Frontend Mastery": {
      skills: [
        { name: "React Native", level: 75, years: "1+" },
        { name: "Redux State Management", level: 70, years: "1+" },
        { name: "Responsive Design", level: 90, years: "2+" },
        { name: "Bootstrap Framework", level: 85, years: "1.5+" },
        { name: "Modern CSS (Flexbox/Grid)", level: 88, years: "2+" }
      ],
      icon: "🎨",
      color: thanosMode ? "#ffed4e" : "#10b981"
    },
    "Backend Expertise": {
      skills: [
        { name: ".NET Web API", level: 85, years: "1.5+" },
        { name: "Entity Framework", level: 80, years: "1+" },
        { name: "RESTful API Design", level: 82, years: "1.5+" },
        { name: "JWT Authentication", level: 75, years: "1+" },
        { name: "LINQ Queries", level: 88, years: "1.5+" }
      ],
      icon: "⚡",
      color: thanosMode ? "#ff9800" : "#8b5cf6"
    },
    "Development Tools": {
      skills: [
        { name: "Visual Studio 2022", level: 95, years: "2+" },
        { name: "VS Code", level: 90, years: "2+" },
        { name: "JetBrains Rider", level: 80, years: "1+" },
        { name: "Git & GitHub", level: 85, years: "2+" },
        { name: "Postman API Testing", level: 85, years: "1+" }
      ],
      icon: "🛠️",
      color: thanosMode ? "#4caf50" : "#f59e0b"
    },
    "Modern DevOps": {
      skills: [
        { name: "Docker Containers", level: 70, years: "1+" },
        { name: "CI/CD Pipelines", level: 65, years: "6mo+" },
        { name: "Azure DevOps", level: 60, years: "6mo+" },
        { name: "GitHub Actions", level: 68, years: "8mo+" },
        { name: "Version Control", level: 90, years: "2+" }
      ],
      icon: "☁️",
      color: thanosMode ? "#2196f3" : "#ef4444"
    },
    "AI & Innovation": {
      skills: [
        { name: "Claude AI Integration", level: 85, years: "1+" },
        { name: "ChatGPT API", level: 80, years: "1+" },
        { name: "GitHub Copilot", level: 90, years: "1+" },
        { name: "AI-Assisted Development", level: 88, years: "1+" },
        { name: "Prompt Engineering", level: 85, years: "1+" }
      ],
      icon: "🤖",
      color: thanosMode ? "#9c27b0" : "#06b6d4"
    }
  };

  const achievements = [
    { icon: "🎯", title: "Clean Code Advocate", desc: "Writing maintainable, well-documented code" },
    { icon: "⚡", title: "Performance Optimizer", desc: "Reducing load times and improving UX" },
    { icon: "🔧", title: "Problem Solver", desc: "Debugging complex issues efficiently" },
    { icon: "📈", title: "Continuous Learner", desc: "Staying updated with latest technologies" }
  ];

  return (
    <section id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2>Professional Skill Set</h2>
          <p className="skills-subtitle">
            Comprehensive expertise in modern full-stack development with emphasis on 
            <strong> .NET ecosystem</strong>, <strong>React.js</strong>, and <strong>AI-powered development</strong>
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="tech-stack-grid">
          {Object.entries(techStack).map(([category, data], index) => (
            <div key={index} className="tech-stack-card card">
              <div className="card-header">
                <span className="tech-icon" style={{ color: data.color }}>
                  {data.icon}
                </span>
                <h3 style={{ color: data.color }}>{category}</h3>
              </div>
              
              <div className="skills-list">
                {data.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-experience">{skill.years}</span>
                    </div>
                    <div className="skill-progress">
                      <div 
                        className="skill-bar" 
                        style={{ 
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${data.color}, ${data.color}80)`
                        }}
                      ></div>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Achievements */}
        <div className="achievements-section">
          <h3>Professional Strengths</h3>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card card">
                <span className="achievement-icon">{achievement.icon}</span>
                <h4>{achievement.title}</h4>
                <p>{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="skills-summary card">
          <div className="summary-content">
            <h3>💡 Development Philosophy</h3>
            <p>
              Committed to writing <strong>clean, scalable code</strong> that follows industry best practices. 
              Passionate about leveraging <strong>AI tools</strong> to enhance productivity while maintaining 
              high code quality standards. Always eager to learn new technologies and contribute to 
              <strong>innovative solutions</strong>.
            </p>
            <div className="tech-badges">
              <span className="tech-badge primary">Full-Stack Ready</span>
              <span className="tech-badge secondary">AI-Enhanced Development</span>
              <span className="tech-badge tertiary">Modern Architecture</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        #skills {
          padding: 120px 0;
          background: ${thanosMode ? 
            'linear-gradient(135deg, rgba(45, 27, 105, 0.1) 0%, transparent 50%, rgba(138, 43, 226, 0.1) 100%)' : 
            'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, transparent 50%, rgba(16, 185, 129, 0.05) 100%)'
          };
        }

        .skills-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .skills-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .skills-header h2 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          color: ${thanosMode ? '#ffd700' : '#fff'};
          position: relative;
          display: inline-block;
        }

        .skills-header h2::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 4px;
          background: ${thanosMode ? 
            'linear-gradient(90deg, #ffd700, #ffed4e, #ffd700)' : 
            'linear-gradient(90deg, #3b82f6, #10b981, #3b82f6)'
          };
          border-radius: 2px;
        }

        .skills-subtitle {
          font-size: 1.3rem;
          color: ${thanosMode ? '#f0f0f0' : '#d1d5db'};
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .skills-subtitle strong {
          color: ${thanosMode ? '#ffd700' : '#3b82f6'};
        }

        .tech-stack-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 2.5rem;
          margin-bottom: 4rem;
        }

        .tech-stack-card {
          background: ${thanosMode ? 
            'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 215, 0, 0.05) 100%)' : 
            'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
          };
          border: 1px solid ${thanosMode ? 'rgba(255, 215, 0, 0.3)' : 'rgba(255, 255, 255, 0.2)'};
          border-radius: 20px;
          padding: 2.5rem;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .tech-stack-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, currentColor, transparent);
          opacity: 0.7;
        }

        .tech-stack-card:hover {
          transform: translateY(-10px);
          border-color: ${thanosMode ? 'rgba(255, 215, 0, 0.5)' : 'rgba(255, 255, 255, 0.4)'};
          box-shadow: ${thanosMode ? 
            '0 20px 40px rgba(255, 215, 0, 0.2)' : 
            '0 20px 40px rgba(0, 0, 0, 0.3)'
          };
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid ${thanosMode ? 'rgba(255, 215, 0, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
        }

        .tech-icon {
          font-size: 2.5rem;
        }

        .card-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
        }

        .skills-list {
          space-y: 1.5rem;
        }

        .skill-item {
          margin-bottom: 1.5rem;
          position: relative;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .skill-name {
          font-weight: 600;
          color: ${thanosMode ? '#fff' : '#f3f4f6'};
          font-size: 1rem;
        }

        .skill-experience {
          font-size: 0.85rem;
          color: ${thanosMode ? '#ffed4e' : '#9ca3af'};
          background: ${thanosMode ? 'rgba(255, 215, 0, 0.2)' : 'rgba(156, 163, 175, 0.2)'};
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-weight: 500;
        }

        .skill-progress {
          width: 100%;
          height: 8px;
          background: ${thanosMode ? 'rgba(255, 215, 0, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 0.25rem;
          position: relative;
        }

        .skill-bar {
          height: 100%;
          border-radius: 4px;
          transition: width 1.5s ease-out;
          position: relative;
        }

        .skill-bar::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 20px;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3));
          animation: shimmer 2s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100px); }
          100% { transform: translateX(100px); }
        }

        .skill-percentage {
          font-size: 0.8rem;
          color: ${thanosMode ? '#ffed4e' : '#9ca3af'};
          font-weight: 600;
          float: right;
        }

        .achievements-section {
          margin: 4rem 0;
          text-align: center;
        }

        .achievements-section h3 {
          font-size: 2.5rem;
          color: ${thanosMode ? '#ffd700' : '#fff'};
          margin-bottom: 2rem;
          font-weight: 700;
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .achievement-card {
          text-align: center;
          padding: 2rem;
        }

        .achievement-icon {
          font-size: 3rem;
          display: block;
          margin-bottom: 1rem;
        }

        .achievement-card h4 {
          color: ${thanosMode ? '#ffd700' : '#fff'};
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .achievement-card p {
          color: ${thanosMode ? '#f0f0f0' : '#d1d5db'};
          font-size: 0.95rem;
        }

        .skills-summary {
          margin-top: 4rem;
          text-align: center;
          padding: 3rem;
        }

        .summary-content h3 {
          color: ${thanosMode ? '#ffd700' : '#fff'};
          font-size: 2rem;
          margin-bottom: 1.5rem;
          font-weight: 700;
        }

        .summary-content p {
          color: ${thanosMode ? '#f0f0f0' : '#d1d5db'};
          font-size: 1.2rem;
          line-height: 1.8;
          max-width: 800px;
          margin: 0 auto 2rem;
        }

        .summary-content strong {
          color: ${thanosMode ? '#ffd700' : '#3b82f6'};
        }

        .tech-badges {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .tech-badge {
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .tech-badge.primary {
          background: ${thanosMode ? 
            'linear-gradient(135deg, #ffd700, #ffed4e)' : 
            'linear-gradient(135deg, #3b82f6, #1d4ed8)'
          };
          color: ${thanosMode ? '#000' : '#fff'};
        }

        .tech-badge.secondary {
          background: ${thanosMode ? 
            'rgba(255, 215, 0, 0.2)' : 
            'rgba(16, 185, 129, 0.2)'
          };
          border: 1px solid ${thanosMode ? '#ffd700' : '#10b981'};
          color: ${thanosMode ? '#ffd700' : '#10b981'};
        }

        .tech-badge.tertiary {
          background: ${thanosMode ? 
            'rgba(255, 215, 0, 0.1)' : 
            'rgba(139, 92, 246, 0.2)'
          };
          border: 1px solid ${thanosMode ? 'rgba(255, 215, 0, 0.5)' : '#8b5cf6'};
          color: ${thanosMode ? '#ffed4e' : '#8b5cf6'};
        }

        .tech-badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .tech-stack-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .achievements-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
          
          .skills-header h2 {
            font-size: 2.5rem;
          }
          
          .skills-subtitle {
            font-size: 1.1rem;
          }

          .tech-badges {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
