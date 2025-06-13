const Leadership = () => {
  const achievements = [
    {
      title: "Vice President",
      organization: "IETE Student Forum",
      description: "Organized tech events, talks, and workshops to foster learning and innovation among students.",
      period: "Current",
      icon: "🏆"
    },
    {
  title: "AI/ML Team Member",
  organization: "Google Developer Groups (GDG)",
  description: "Collaborated on AI/ML initiatives, contributing to community-driven tech sessions, workshops, and project-based learning within the GDG network.",
  period: "2024 – Present",
  icon: "🤖"
}

  ];

  return (
    <section id="leadership" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Leadership & Involvement
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-400 to-cyan-400"></div>
            
            {achievements.map((achievement, index) => (
              <div key={achievement.title} className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-slate-900"></div>
                
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50 transition-all duration-300
    hover:border-blue-400 hover:shadow-[0_0_32px_8px_rgba(59,130,246,0.7)] hover:shadow-blue-400/70">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{achievement.icon}</span>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
                        <p className="text-blue-400 text-sm">{achievement.organization}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-3">{achievement.description}</p>
                    <span className="text-xs text-gray-500 bg-slate-600/50 px-2 py-1 rounded">
                      {achievement.period}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;

