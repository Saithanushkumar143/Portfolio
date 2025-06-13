import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.10.7/build/spline-viewer.js";
    document.body.appendChild(script);

    // Inject viewer tag directly
    if (viewerRef.current && !viewerRef.current.querySelector("spline-viewer")) {
      const viewer = document.createElement("spline-viewer");
      viewer.setAttribute("url", "https://prod.spline.design/ky-5n8YwghjMc0Pa/scene.splinecode");
      // Further enlarge and shift left for more zoomed-out right side
      viewer.style.width = "180vw";
      viewer.style.height = "140vh";
      viewer.style.position = "absolute";
      viewer.style.top = "0";
      viewer.style.left = "-40vw";
      viewer.style.zIndex = "0";
      viewerRef.current.appendChild(viewer);
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 🎯 3D Background Viewer (Interactive) */}
      <div ref={viewerRef} className="absolute inset-0 z-0" />

      {/* Hide Spline watermark */}
      <style>{`
        .spline-watermark {
          display: none !important;
        }
      `}</style>

      {/* Optional dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>

      {/* Glow effects */}
      <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl animate-pulse z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-1000 z-10 pointer-events-none"></div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center z-20 relative">
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

      {/* Scroll Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ArrowDown className="w-6 h-6 text-blue-400" />
      </div>
    </section>
  );
};

export default Hero;
