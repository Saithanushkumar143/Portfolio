// (file intentionally left blank - Services section removed)
const Services = () => {
  const services = [
    {
      title: "AI Prompt Engineering",
      description: "Design and optimize AI prompts for maximum effectiveness and precision.",
      icon: "🤖",
      features: ["Custom prompt design", "AI model optimization", "Performance analysis"]
    },
    {
      title: "Web Development",
      description: "Create modern, responsive websites using HTML, CSS, and JavaScript.",
      icon: "💻",
      features: ["Responsive design", "Modern UI/UX", "Performance optimization"]
    },
    {
      title: "Video & Image Editing",
      description: "Professional editing services for multimedia content creation.",
      icon: "🎨",
      features: ["Video production", "Photo enhancement", "Creative design"]
    },
    {
      title: "Peer Mentoring",
      description: "English communication and soft skills development coaching.",
      icon: "🎓",
      features: ["Communication skills", "Technical mentoring", "Career guidance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Services I Offer
        </h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="group">
              <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 h-full">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {service.description}
                </p>
                <ul className="space-y-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-xs text-gray-400 flex items-center">
                      <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
