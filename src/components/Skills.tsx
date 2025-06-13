import React, { useEffect, useRef } from "react";

const Skills = () => {
  const skills = [
    { name: "Python", level: 75, color: "from-yellow-400 to-yellow-600" },
    { name: "C Programming", level: 70, color: "from-blue-400 to-blue-600" },
    { name: "HTML & CSS", level: 85, color: "from-orange-400 to-red-600" },
    { name: "Prompt Engineering", level: 90, color: "from-purple-400 to-pink-600" },
    { name: "Machine Learning", level: 60, color: "from-green-400 to-emerald-600" },
    { name: "Video & Photo Editing", level: 80, color: "from-indigo-400 to-purple-600" },
    { name: "Microsoft Office", level: 95, color: "from-blue-400 to-cyan-600" },
    { name: "Quantitative Aptitude", level: 75, color: "from-teal-400 to-cyan-600" },
  ];

  // Refs for each bar to trigger animation
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    barRefs.current.forEach((bar, idx) => {
      if (bar) {
        // Trigger width transition after mount
        setTimeout(() => {
          bar.style.width = `${skills[idx].level}%`;
        }, idx * 100); // staggered animation
      }
    });
  }, []);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-gray-400 text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div
                    ref={el => (barRefs.current[index] = el)}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform group-hover:scale-105`}
                    style={{
                      width: 0, // Start at 0, animate to skill.level%
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 italic">
              "Technology is not just about code; it's about creating solutions that bridge the gap between imagination and reality."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
