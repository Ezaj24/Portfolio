import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">About Me</h2>
            <p className="text-white/60 text-lg">My journey in software development</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="glass-effect rounded-xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">My Journey</h3>
                <div className="space-y-4 text-white/70 leading-relaxed">
                  <p>
                    My software engineering journey began with a fascination for problem-solving and building solutions that make a difference. I started with <span className="text-primary font-semibold">C#</span>, which laid the foundation for my understanding of programming concepts and object-oriented design.
                  </p>
                  <p>
                    As I progressed, I dove deep into backend development with <span className="text-secondary font-semibold">.NET technologies</span>, mastering ASP.NET Core Web API, Entity Framework, and database design. This solid backend foundation enabled me to build robust, scalable server-side applications.
                  </p>
                  <p>
                    To complete the full-stack picture, I embraced <span className="text-primary font-semibold">React.js</span> for frontend development, learning to create responsive, interactive user interfaces that provide excellent user experiences.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="glass-effect rounded-xl p-8">
                <h3 className="text-2xl font-bold text-secondary mb-6">Core Values</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Focus",
                      description: "Dedicated to writing clean, maintainable code and following best practices in every project."
                    },
                    {
                      title: "Determination", 
                      description: "Committed to continuous learning and overcoming challenges to deliver quality solutions."
                    },
                    {
                      title: "Real-world Impact",
                      description: "Building practical applications that solve actual problems and provide genuine value."
                    }
                  ].map((value, index) => (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="border-l-2 border-primary pl-4"
                    >
                      <h4 className="font-semibold text-white mb-1">{value.title}</h4>
                      <p className="text-white/60 text-sm">{value.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="glass-effect rounded-xl p-6 text-center"
              >
                <h4 className="text-xl font-bold text-gradient mb-2">Currently</h4>
                <p className="text-white/70">
                  Actively building real-world projects and preparing to contribute to innovative development teams as a professional software engineer.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
