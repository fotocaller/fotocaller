import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Video = () => {
  const videoRef = useRef<HTMLVideoElement>(null); // Reference to the video element
  const containerRef = useRef<HTMLDivElement>(null); // Reference to the container
  const [isLoaded, setIsLoaded] = useState(false); // State to track if the video has loaded

  useEffect(() => {
    if (containerRef.current) {
      // GSAP initial styles and animations
      gsap.set(containerRef.current, { width: "80%", marginTop: "-1rem" });

      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%", // Start animation when the top of the element is 70% down the viewport
          end: "top 20%", // End animation when the top of the element is 20% down the viewport
          scrub: true, // Tie animation to the scroll
        },
        width: "90%", // Target width
        marginTop: "-5rem",
        ease: "power1.inOut",
      });
    }
  }, []);

  const handleLoadedData = () => {
    setIsLoaded(true); // Set the video as loaded
  };

  return (
    <div className="flex w-full justify-center">
      <div
        ref={containerRef}
        className={`bg-navy w-[80%] rounded-xl overflow-hidden h-[50vh] md:h-[70vh]`}
      >
        {!isLoaded && (
          <div className="flex text-2xl items-center justify-center h-full bg-navy text-white">
            Loading...
          </div>
        )}
        <video
          ref={videoRef}
          className={`w-full h-full object-cover ${
            isLoaded ? "block" : "hidden"
          }`}
          autoPlay
          loop
          muted
          onLoadedData={handleLoadedData}
          src="/assets/main_vid.mp4"
        ></video>
      </div>
    </div>
  );
};

export default Video;
