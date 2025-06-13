import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const viewerRef = useRef<HTMLDivElement>(null);
  const splineViewerRef = useRef<any>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.10.7/build/spline-viewer.js";
    document.body.appendChild(script);

    if (viewerRef.current && !viewerRef.current.querySelector("spline-viewer")) {
      const viewer = document.createElement("spline-viewer");
      viewer.setAttribute("url", "https://prod.spline.design/ky-5n8YwghjMc0Pa/scene.splinecode");
      viewer.style.width = "180vw";
      viewer.style.height = "140vh";
      viewer.style.position = "absolute";
      viewer.style.top = "0";
      viewer.style.left = "-40vw";
      viewer.style.zIndex = "0";
      viewer.style.transition = "transform 0.7s cubic-bezier(.22,1,.36,1)";
      splineViewerRef.current = viewer;
      viewerRef.current.appendChild(viewer);
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!splineViewerRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      splineViewerRef.current.style.transform = `translate(${x * 30}px, ${y * 20}px) scale(1.01)`;
    };

    const handleMouseLeave = () => {
      if (!splineViewerRef.current) return;
      splineViewerRef.current.style.transform = "translate(0,0) scale(1)";
    };

    const section = document.getElementById("home");
    section?.addEventListener("mousemove", handleMouseMove);
    section?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section?.removeEventListener("mousemove", handleMouseMove);
      section?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div ref={viewerRef} className="absolute inset-0 z-0" />

      <style>{`
        .spline-watermark {
          display: none !important;
        }
        .hero-title-glow {
          text-shadow: 0 0 8px rgba(255,255,255,0.3), 0 0 20px rgba(0,255,255,0.3), 0 0 40px rgba(0,255,255,0.2);
          animation: flicker 3s infinite alternate;
        }
        @keyframes flicker {
          0% { text-shadow: 0 0 8px rgba(255,255,255,0.3); }
          100% { text-shadow: 0 0 12px rgba(0,255,255,0.6), 0 0 32px rgba(0,255,255,0.3); }
        }
      `}</style>

      {/* Overlay and glow orbs */}
      <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl animate-pulse z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-1000 z-10" />

      {/* Content */}
      <div className="container mx-auto px-6 text-center z-20 relative">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-400 bg-clip-text text-transparent hero-title-glow"
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          YEGOTI<br />SAI THANUSH KUMAR
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-8 text-blue-200 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          Fusing ancient wisdom with modern intelligence
        </motion.p>

        <motion.p
          className="text-lg mb-12 text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          B.Tech IoT Student • AI Enthusiast
        </motion.p>

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
          <p className="text-sm text-gray-400 mb-2">Dreaming of building Jarvis</p>
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
