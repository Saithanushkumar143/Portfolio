
const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a motivated B.Tech IoT student at Seshadri Rao Gudlavalleru Engineering College, 
                passionate about AI, web development, and intelligent systems. I thrive in dynamic tech 
                environments, always eager to learn and innovate.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm also the creator of KurukshetraMind and aspire to build my own Jarvis one day. 
                My journey blends ancient wisdom with cutting-edge technology, making every project 
                both meaningful and innovative.
              </p>
              
              <div className="flex items-center space-x-2 text-blue-400">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm">Visakhapatnam, India</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-white">B.Tech in Internet of Things</h4>
                    <p className="text-sm text-gray-400">Seshadri Rao Gudlavalleru Engineering College</p>
                    <p className="text-xs text-gray-500">2023 – 2027</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Intermediate</h4>
                    <p className="text-sm text-gray-400">Narayana Junior College</p>
                    <p className="text-xs text-gray-500">2021 – 2023</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">SSC</h4>
                    <p className="text-sm text-gray-400">Holy Cross School</p>
                    <p className="text-xs text-gray-500">2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
