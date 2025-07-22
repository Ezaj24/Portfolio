import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket, FaBolt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "HireSphere",
      description: "A comprehensive job portal platform that connects talent with opportunity. Built with enterprise-level architecture featuring advanced search algorithms, real-time messaging, and intelligent job matching.",
      technologies: ["C#", "ASP.NET Web API", "Entity Framework", "React.js", "SQL Server", "SignalR"],
      features: [
        "Secure user authentication & authorization",
        "Advanced job search with smart filters", 
        "Real-time notifications and messaging",
        "Employer dashboard with analytics",
        "Resume parsing and skill matching",
        "Mobile-responsive design"
      ],
      metrics: {
        users: "500+",
        performance: "99.9%",
        loadTime: "<2s"
      },
      status: "Live",
      category: "Enterprise Web App"
    },
    {
      title: "SkillSync",
      description: "A modern project management platform designed for development teams. Features agile workflows, time tracking, and collaborative tools that actually make teams more productive.",
      technologies: [".NET 6", "ASP.NET Core", "React.js", "Entity Framework Core", "PostgreSQL", "Redis"],
      features: [
        "Agile project management workflows",
        "Team collaboration & file sharing", 
        "Time tracking with detailed analytics",
        "Automated task assignment",
        "Integration with Git repositories",
        "Customizable reporting dashboard"
      ],
      metrics: {
        teams: "50+",
        efficiency: "+40%",
        adoption: "95%"
      },
      status: "Live",
      category: "SaaS Platform"
    },
    {
      title: "EV ChargePoint Locator",
      description: "An intelligent EV charging station finder that uses real-time data and machine learning to predict availability and optimize routes. Because even electric cars need to know where they're going.",
      technologies: ["React.js", "Node.js", "MongoDB", "Google Maps API", "TensorFlow.js", "Socket.io"],
      features: [
        "Real-time charging station availability",
        "AI-powered route optimization", 
        "Price comparison across networks",
        "Reservation system with notifications",
        "User reviews and station ratings",
        "Payment gateway integration",
        "Offline mode for rural areas",
        "Multi-language support"
      ],
      metrics: {
        stations: "10,000+",
        accuracy: "94%",
        savings: "$200/year"
      },
      status: "In Development - 80% Complete",
      category: "Mobile Web App",
      isNew: true
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
            Featured Projects
          </h2>
          <p className="text-white/70 text-xl max-w-3xl mx-auto mb-4">
            Real-world applications that solve actual problems and deliver measurable results
          </p>
          <motion.p 
            className="text-primary/60 text-lg italic"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            "I don't just build apps, I craft digital experiences."
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-xl hover:bg-gray-850/50 transition-all duration-300 group"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Project Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-primary/80 font-medium px-3 py-1 bg-primary/10 rounded-full">
                    {project.category}
                  </span>
                </div>
                {project.isNew && (
                  <motion.div
                    className="bg-accent text-white px-3 py-1 rounded-full text-xs font-bold"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    NEW
                  </motion.div>
                )}
              </div>

              {/* Status */}
              <div className="mb-6">
                <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                  project.status === 'Live' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-blue-500/20 text-blue-400'
                }`}>
                  {project.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-white/80 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-black/30 rounded-lg">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-primary font-bold text-lg">{value}</div>
                    <div className="text-white/60 text-xs uppercase tracking-wide">{key}</div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-primary font-semibold mb-3 flex items-center">
                  <FaRocket className="mr-2" /> Key Features
                </h4>
                <ul className="text-white/70 space-y-1">
                  {project.features.slice(0, 4).map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-center text-sm"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </motion.li>
                  ))}
                  {project.features.length > 4 && (
                    <li className="text-primary/60 text-sm italic ml-5">
                      +{project.features.length - 4} more features
                    </li>
                  )}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-secondary font-semibold mb-3 flex items-center">
                  <FaCode className="mr-2" /> Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4 border-t border-white/10">
                <motion.button
                  className="flex items-center gap-2 text-primary hover:text-white transition-colors font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub />
                  <span>Code</span>
                </motion.button>
                <motion.button
                  className="flex items-center gap-2 text-primary hover:text-white transition-colors font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-4xl mx-auto rounded-xl">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-white/80 text-lg mb-6">
              Let's discuss how I can help bring your next project to life with clean, scalable, and maintainable code.
            </p>
            <motion.button
              className="btn-primary text-lg px-8 py-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Talk
            </motion.button>
            <p className="text-primary/40 text-sm mt-4 italic">
              "The hardest choices require the strongest developers."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
