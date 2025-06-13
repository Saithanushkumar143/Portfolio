import { useEffect, useState } from "react";

const SplineViewer = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const existingScript = document.querySelector('script[src*="@splinetool/viewer"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://unpkg.com/@splinetool/viewer@1.10.7/build/spline-viewer.js";
      script.onload = () => setIsLoaded(true);
      document.body.appendChild(script);
    } else {
      setIsLoaded(true);
    }
  }, []);

  return (
    <div className="mt-20 flex justify-center">
      {isLoaded ? (
        // @ts-ignore
        <spline-viewer
          url="https://prod.spline.design/Ih8zQAE-gUSIJdQ3/scene.splinecode"
          style={{
            width: '100%',
            maxWidth: '900px',
            height: '400px',
            borderRadius: '1rem',
            overflow: 'hidden',
          }}
        />
      ) : (
        <p className="text-white text-center">Loading 3D magic...</p>
      )}
    </div>
  );
};

export default SplineViewer;
