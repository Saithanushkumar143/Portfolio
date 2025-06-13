
const Projects = () => {
  const projects = [
    {
      title: "ALLINONEBOT",
      description: "Centralized AI bot hub that brings together multiple AI functionalities in one unified platform.",
      tech: ["AI", "Chatbot", "Web Development"],
      link: "https://allinoneaibot.wordpress.com",
      status: "Live"
    },
    {
      title: "KurukshetraMind",
      description: "Mahabharata-based AI decision support system that provides wisdom-driven guidance using ancient knowledge.",
      tech: ["React", "Flask", "MongoDB", "AI"],
      link: "#",
      status: "In Development"
    },
    {
      title: "Jarvis AI",
      description: "Voice-interactive multifunctional smart assistant inspired by Iron Man's AI companion.",
      tech: ["Python", "APIs", "Voice Recognition", "AI"],
      link: "#",
      status: "Work in Progress"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="group">
              <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    project.status === "Live" 
                      ? "bg-green-500/20 text-green-400" 
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
