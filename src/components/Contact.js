import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent mb-4">Let's Connect</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Get In Touch</h3>
                <p className="text-white/70 mb-8 leading-relaxed">
                  I'm always interested in hearing about new opportunities, collaborating on projects, 
                  or simply connecting with fellow developers. Feel free to reach out!
                </p>
                
                <div className="space-y-4">
                  <motion.a
                    href="mailto:ezaj.dev@gmail.com"
                    className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <FaEnvelope className="text-cyan-400 text-xl group-hover:text-orange-500 transition-colors duration-300" />
                    <div>
                      <div className="text-white font-medium">Email</div>
                      <div className="text-white/60 text-sm">ezaj.dev@gmail.com</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://linkedin.com/in/ezaj-shaikh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <FaLinkedin className="text-cyan-400 text-xl group-hover:text-orange-500 transition-colors duration-300" />
                    <div>
                      <div className="text-white font-medium">LinkedIn</div>
                      <div className="text-white/60 text-sm">Connect with me</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://github.com/ezaj-shaikh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <FaGithub className="text-cyan-400 text-xl group-hover:text-orange-500 transition-colors duration-300" />
                    <div>
                      <div className="text-white font-medium">GitHub</div>
                      <div className="text-white/60 text-sm">View my repositories</div>
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-orange-500/10"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-orange-500 mb-6">Quick Facts</h3>
                  <div className="space-y-6">
                    {[
                      {
                        label: "Location",
                        value: "Open to Remote & On-site"
                      },
                      {
                        label: "Experience",
                        value: "Full-Stack Development"
                      },
                      {
                        label: "Focus Areas",
                        value: ".NET, React, Web APIs"
                      },
                      {
                        label: "Availability",
                        value: "Open to Opportunities"
                      }
                    ].map((fact, index) => (
                      <motion.div
                        key={fact.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        className="flex justify-between items-center py-2 border-b border-white/10"
                      >
                        <span className="text-white/60">{fact.label}</span>
                        <span className="text-white font-medium">{fact.value}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-8 pt-6 border-t border-white/10"
                  >
                    <p className="text-center text-white/70 text-sm">
                      "Building tomorrow's solutions with today's technology"
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
