import { motion, Variants } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "ALLINONEBOT",
      description:
        "An integrated AI assistant combining chat, vision, automation, and productivity tools—designed to centralize multiple AI experiences into one seamless platform for daily digital tasks.",
      tech: ["AI", "Chatbot", "Web Development"],
      link: "https://allinoneaibot.wordpress.com",
      status: "Live",
    },
    {
      title: "KurukshetraMind",
      description:
        "A Mahabharata-inspired AI system offering ancient wisdom to guide modern decisions, using contextual storytelling, shlokas, and powerful character-driven insights to encourage clarity and purpose.",
      tech: ["React", "Flask", "MongoDB", "AI"],
      link: "#",
      status: "In Development",
    },
    {
      title: "Jarvis AI",
      description:
        "A voice-controlled digital assistant modeled after Iron Man’s Jarvis, featuring smart automation, voice commands, API integration, and personal productivity tools built with real-time adaptability.",
      tech: ["Python", "APIs", "Voice Recognition", "AI"],
      link: "#",
      status: "Work in Progress",
    },
  ];

  const splitVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    show: (i: number) => ({
      opacity: 1,
      x: i === 0 ? -60 : i === 2 ? 60 : 0,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <motion.section
      id="projects"
      className="py-20 bg-slate-800/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={splitVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="group h-full flex"
            >
              <div
                className={`p-6 rounded-xl border transition-all duration-300 transform flex flex-col h-full min-h-[340px]
                  ${
                    i === 1
                      ? "bg-slate-700/70 border-blue-500 shadow-lg shadow-blue-500/20"
                      : "bg-slate-700/50 border-slate-600/50 hover:border-blue-400/50 hover:shadow-blue-500/10"
                  } hover:-translate-y-2 hover:shadow-xl hover:shadow-[0_0_24px_8px_rgba(59,130,246,0.4)]`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      project.status === "Live"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
