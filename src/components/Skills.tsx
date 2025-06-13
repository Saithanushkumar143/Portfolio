import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "C Programming",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
    {
      name: "HTML & CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "Prompt Engineering",
      logo: "https://img.icons8.com/fluency/48/ai.png",
    },
    {
      name: "Machine Learning",
      logo: "https://img.icons8.com/ios-filled/50/artificial-intelligence.png",
    },
    {
      name: "Canva",
      logo: "https://img.icons8.com/color/48/canva.png",
    },
    {
      name: "Microsoft Office",
      logo: "https://img.icons8.com/color/48/microsoft-office-2019.png",
    },
    {
      name: "Quantitative Aptitude",
      logo: "https://img.icons8.com/ios/50/sigma.png",
    },
  ];

  return (
    <motion.section
      id="skills"
      className="py-20"
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <motion.img
                src={skill.logo}
                alt={skill.name}
                className="w-16 h-16 object-contain mb-2"
                whileHover={{
                  rotate: [0, 5, -5, 3, 0],
                  boxShadow: "0px 0px 16px rgba(0, 255, 255, 0.4)",
                  transition: { duration: 0.5 },
                }}
              />
              <span className="text-white text-sm text-center">{skill.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="text-gray-400 italic">
            "Technology is not just about code; it's about creating solutions that bridge the gap between imagination and reality."
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
