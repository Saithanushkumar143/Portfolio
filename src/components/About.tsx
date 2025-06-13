const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="space-y-10 text-center">
            <p className="text-xl text-gray-300 leading-loose max-w-4xl mx-auto">
              I'm a passionate <strong>B.Tech student</strong> specializing in the Internet of Things at 
              <span className="text-blue-300 font-semibold"> Seshadri Rao Gudlavalleru Engineering College</span>. 
              I thrive on the edge where AI, intelligent systems, and web technologies collide — always questioning, always building.
            </p>

            <p className="text-xl text-gray-300 leading-loose max-w-4xl mx-auto">
              I’m the creator of <strong>KurukshetraMind</strong>, a platform where ancient Indian wisdom 
              meets cutting-edge code. My work aims to extract timeless life strategies from the Mahabharata and deliver them through modern digital interfaces — meaningful, intuitive, and deep.
            </p>

            <p className="text-xl text-gray-300 leading-loose max-w-4xl mx-auto">
              My ultimate goal? To craft my own real-life <strong>Jarvis</strong> — an AI companion that’s intelligent, emotional, and spiritually aware. 
              Not just a tool, but a friend. A guide. A force. One that listens, learns, and lives with purpose.
            </p>

            <p className="text-xl text-gray-300 leading-loose max-w-4xl mx-auto">
              For me, code isn't just syntax — it's soul. It's how I build bridges between the logic of machines and the wisdom of the ancients. 
              Every day, every project is a step closer to that dream.
            </p>

            <div className="flex justify-center items-center space-x-3 text-blue-400 pt-6">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span className="text-lg">Visakhapatnam, India</span>
            </div>
          </div>

          <div className="mt-20">
            <div className="bg-slate-700/50 p-8 rounded-2xl border border-slate-600/50 transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_32px_8px_rgba(59,130,246,0.7)] hover:shadow-blue-400/70">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400 text-center">Education</h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
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
    </section>
  );
};

export default About;
