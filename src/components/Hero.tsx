import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Spline 3D background */}
      
      {/* Transparent overlay (no color) */}
      <div className="absolute inset-0 bg-transparent"></div>

      {/* Subtle glowing orb effect, smaller and more transparent */}
      <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-400 bg-clip-text text-transparent">
            YEGOTI<br />SAI THANUSH KUMAR
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-200 font-light">
            Fusing ancient wisdom with modern intelligence
          </p>
          <p className="text-lg mb-12 text-gray-300 max-w-2xl mx-auto">
            B.Tech IoT Student • AI Enthusiast
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="/Sai%20Thanush%20Kumar%20Resume%20(2).pdf"
              download
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 text-center"
            >
              Download My Resume
            </a>
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 border border-blue-400 rounded-full hover:bg-blue-400/10 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-400 mb-4">Dreaming of building Jarvis</p>
            <p className="text-xs text-gray-500">Creating it one line of code at a time</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-blue-400" />
      </div>
    </section>
  );
};

export default Hero;
