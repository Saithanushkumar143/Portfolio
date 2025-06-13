import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const TypewriterText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const index = useRef(0);

  useEffect(() => {
    index.current = 0;
    setDisplayedText("");
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index.current));
      index.current++;
      if (index.current === text.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, [text]);

  return <p className="text-xl text-gray-300 leading-loose max-w-4xl mx-auto whitespace-pre-wrap">{displayedText}</p>;
};

const About = () => {
  const texts = [
    `I'm a passionate B.Tech student specializing in the Internet of Things at Seshadri Rao Gudlavalleru Engineering College. I thrive on the edge where AI, intelligent systems, and web technologies collide — always questioning, always building.`,
    `I’m the creator of KurukshetraMind, a platform where ancient Indian wisdom meets cutting-edge code. My work aims to extract timeless life strategies from the Mahabharata and deliver them through modern digital interfaces — meaningful, intuitive, and deep.`,
    `My ultimate goal? To craft my own real-life Jarvis — an AI companion that’s intelligent, emotional, and spiritually aware. Not just a tool, but a friend. A guide. A force.`,
    `For me, code isn't just syntax — it's soul. It's how I build bridges between the logic of machines and the wisdom of the ancients. Every day, every project is a step closer to that dream.`,
  ];

  return (
    <motion.section
      id="about"
      className="py-24 bg-slate-800/50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerStagger}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            About Me
          </motion.h2>

          <div className="space-y-10 text-center">
            {texts.map((text, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <TypewriterText text={text} />
              </motion.div>
            ))}

            <motion.div
              className="flex justify-center items-center space-x-3 text-blue-400 pt-6"
              variants={fadeInUp}
            >
              <div className="w-3 h-3 bg-blue-400 rounded-full" />
              <span className="text-lg">Visakhapatnam, India</span>
            </motion.div>
          </div>

          <motion.div
            className="mt-20"
            variants={fadeInUp}
          >
            <motion.div
              className="bg-slate-700/50 p-8 rounded-2xl border border-slate-600/50 transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_32px_8px_rgba(59,130,246,0.7)] hover:shadow-blue-400/70"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-blue-400 text-center">Education</h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                {[
                  {
                    degree: "B.Tech in Internet of Things",
                    place: "Seshadri Rao Gudlavalleru Engineering College",
                    year: "2023 – 2027",
                  },
                  {
                    degree: "Intermediate",
                    place: "Narayana Junior College",
                    year: "2021 – 2023",
                  },
                  {
                    degree: "SSC",
                    place: "Holy Cross School",
                    year: "2021",
                  },
                ].map((edu, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <h4 className="font-medium text-white">{edu.degree}</h4>
                    <p className="text-sm text-gray-400">{edu.place}</p>
                    <p className="text-xs text-gray-500">{edu.year}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
