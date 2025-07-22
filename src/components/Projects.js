import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaBolt, FaMapMarkerAlt, FaCode, FaRocket } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "HIRESPHERE",
      description: "A comprehensive full-stack job portal forged with the precision of the Power Stone. Connects employers and job seekers through an unstoppable platform featuring advanced authentication, intelligent job matching, and real-time notifications that bend reality to your will.",
      technologies: ["C#", "ASP.NET Web API", "Entity Framework", "React.js", "SQL Server"],
      features: [
        "Impenetrable user authentication fortress",
        "Employer dominion over job postings", 
        "Reality-bending search algorithms",
        "Application tracking with cosmic precision",
        "Responsive design across all dimensions"
      ],
      gradient: "from-primary via-gauntlet to-secondary",
      icon: "💼",
      status: "CONQUERED",
      power: "POWER STONE"
    },
    {
      title: "SKILLSYNC",
      description: "A project management platform that harnesses the Space Stone's power to unite teams across dimensions. Built with scalable architecture that can handle infinite projects and workflows, bringing perfect balance to team collaboration.",
      technologies: [".NET 6", "ASP.NET Core", "React.js", "Entity Framework Core", "SQL Server"],
      features: [
        "Interdimensional team collaboration",
        "Timeline manipulation and control", 
        "Task assignment with inevitable completion",
        "Real-time updates across the cosmos",
        "Skill-based team assembly protocol"
      ],
      gradient: "from-secondary via-primary to-gauntlet",
      icon: "⚔️",
      status: "CONQUERED",
      power: "SPACE STONE"
    },
    {
      title: "EV CHARGEPOINT LOCATOR",
      description: "The ultimate EV charging station finder, wielding the Reality Stone to reshape how electric vehicle owners navigate their world. Features quantum-level real-time availability tracking, intelligent route optimization, and the power to reserve charging stations before they even know they're needed.",
      technologies: ["React.js", "Node.js", "MongoDB", "Google Maps API", "Socket.io", "Express.js", "TensorFlow.js"],
      features: [
        "Real-time charging station reality manipulation",
        "Interactive map with multiversal filtering",
        "Route optimization that bends spacetime",
        "Charging station reviews from across dimensions", 
        "Reservation system with Time Stone precision",
        "Price comparison across infinite networks",
        "AI-powered charging prophecies",
        "Payment gateway integration",
        "User preferences and favorite locations",
        "Push notifications for charging status"
      ],
      gradient: "from-accent via-primary to-secondary",
      icon: "⚡",
      status: "75% COMPLETE - IN DEVELOPMENT",
      power: "REALITY STONE",
      isNew: true
    }
  ];

  const thanosQuotes = [
    "I will shred this universe down to its last atom.",
    "You could not live with your own failure, and where did that bring you? Back to me.",
    "I used the stones to destroy the stones.",
    "The hardest choices require the strongest wills."
  ];

  const [currentQuote, setCurrentQuote] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % thanosQuotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Dark background effects */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/10 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              scale: 0 
            }}
            animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 0.3, 0],
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight]
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-black text-primary mb-8 animate-gauntlet-glow" 
              style={{ 
                fontFamily: 'Cinzel, serif',
                textShadow: '4px 4px 8px rgba(0,0,0,0.8), 0 0 30px rgba(139, 90, 43, 0.3)'
              }}>
            THE INFINITY PROJECTS
          </h2>
          <p className="text-white/60 text-xl max-w-4xl mx-auto mb-8 font-medium leading-relaxed">
            Applications forged with the power to reshape digital reality itself. Each project wielding the force of an Infinity Stone.
          </p>
          
          {/* Rotating Thanos Quotes */}
          <motion.div 
            key={currentQuote}
            className="text-primary/80 text-2xl italic font-bold min-h-[3rem] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1 }}
            style={{ 
              fontFamily: 'Cinzel, serif',
              textShadow: '2px 2px 4px rgba(0,0,0,1), 0 0 20px rgba(139, 90, 43, 0.4)'
            }}
          >
            "{thanosQuotes[currentQuote]}"
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 100, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              viewport={{ once: true }}
              className="dark-card p-8 hover:bg-black/60 transition-all duration-700 group relative overflow-hidden border border-primary/20"
              whileHover={{ 
                y: -20,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(139, 90, 43, 0.3)"
              }}
            >
              {/* Cosmic energy effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* New project indicator */}
              {project.isNew && (
                <motion.div
                  className="absolute -top-3 -right-3 bg-accent text-white px-4 py-2 rounded-full text-sm font-black z-10"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ fontFamily: 'Orbitron, monospace' }}
                >
                  🔥 NEW POWER
                </motion.div>
              )}
              
              {/* Project header with stone power */}
              <div className={`w-full h-64 bg-gradient-to-br ${project.gradient} rounded-xl mb-8 flex flex-col items-center justify-center relative overflow-hidden group-hover:shadow-2xl transition-shadow duration-500`}>
                <motion.div
                  className="text-7xl mb-4 filter drop-shadow-2xl"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity }
                  }}
                >
                  {project.icon}
                </motion.div>
                <div className="text-center">
                  <div className="text-xs bg-black/70 px-3 py-1 rounded-full text-primary font-bold mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>
                    {project.power}
                  </div>
                  <div className="text-sm bg-black/50 px-4 py-2 rounded-full text-white font-medium" style={{ fontFamily: 'Orbitron, monospace' }}>
                    {project.status}
                  </div>
                </div>
                
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
              </div>
              
              <h3 className="text-3xl font-black text-primary mb-6 group-hover:text-white transition-colors duration-300" 
                  style={{ 
                    fontFamily: 'Cinzel, serif',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                  }}>
                {project.title}
              </h3>
              
              <p className="text-white/70 mb-8 leading-relaxed text-lg group-hover:text-white/90 transition-colors duration-300">
                {project.description}
              </p>
              
              <div className="mb-8">
                <h4 className="text-primary font-black mb-4 flex items-center text-lg" style={{ fontFamily: 'Orbitron, monospace' }}>
                  <span className="mr-3">💎</span> DOMINION FEATURES:
                </h4>
                <ul className="text-white/60 space-y-3">
                  {project.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-center group-hover:text-white/80 transition-colors duration-300"
                      whileHover={{ x: 10, scale: 1.02 }}
                    >
                      <motion.span 
                        className="w-2 h-2 bg-primary rounded-full mr-4 flex-shrink-0"
                        whileHover={{ scale: 2, boxShadow: "0 0 10px rgba(139, 90, 43, 0.8)" }}
                        transition={{ duration: 0.2 }}
                      ></motion.span>
                      <span className="font-medium">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-10">
                <h4 className="text-gauntlet font-black mb-4 flex items-center text-lg" style={{ fontFamily: 'Orbitron, monospace' }}>
                  <span className="mr-3">⚡</span> WEAPONS ARSENAL:
                </h4>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <motion.span 
                      key={tech}
                      className="px-4 py-2 dark-card text-sm text-primary/90 border border-primary/30 rounded-lg font-bold tracking-wide"
                      whileHover={{ 
                        scale: 1.15,
                        boxShadow: "0 5px 20px rgba(139, 90, 43, 0.4)",
                        y: -3
                      }}
                      style={{ fontFamily: 'Orbitron, monospace' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-6 pt-6 border-t border-primary/20">
                <motion.button
                  className="flex items-center gap-3 text-primary hover:text-white transition-colors duration-300 font-black text-lg group/btn"
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ fontFamily: 'Orbitron, monospace' }}
                >
                  <FaGithub className="group-hover/btn:drop-shadow-lg" />
                  <span>SOURCE CODE</span>
                </motion.button>
                
                <motion.button
                  className="flex items-center gap-3 text-primary hover:text-accent transition-colors duration-300 font-black text-lg group/btn"
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ fontFamily: 'Orbitron, monospace' }}
                >
                  <FaExternalLinkAlt className="group-hover/btn:drop-shadow-lg" />
                  <span>WITNESS POWER</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Epic Thanos Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="dark-card p-12 max-w-6xl mx-auto border border-primary/30">
            <motion.p 
              className="text-3xl md:text-4xl text-primary font-black italic mb-6 leading-tight"
              animate={{ 
                textShadow: [
                  '2px 2px 4px rgba(0,0,0,0.8)', 
                  '4px 4px 8px rgba(0,0,0,0.9), 0 0 20px rgba(139, 90, 43, 0.3)',
                  '2px 2px 4px rgba(0,0,0,0.8)'
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              "I used the stones to destroy the stones. It nearly killed me, but the work is done. 
              It always will be. I am... inevitable."
            </motion.p>
            <p className="text-gauntlet/80 text-xl font-bold" style={{ fontFamily: 'Orbitron, monospace' }}>
              - THANOS, THE MAD TITAN OF CODE
            </p>
            
            <motion.div 
              className="mt-8 text-white/40 text-lg italic"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Each project forged with perfect balance. Each feature inevitable.
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
