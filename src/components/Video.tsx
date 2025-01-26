import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Video = () => {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Ensure the initial width and margin-top are set correctly before animation
      gsap.set(videoRef.current, { width: "80%", marginTop: "-1rem" });

      // Animate the width and margin-top on scroll
      gsap.to(videoRef.current, {
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 70%", // Start animation when the top of the element is 70% down the viewport
          end: "top 20%", // End animation when the top of the element is 30% down the viewport
          scrub: true, // Tie animation to the scroll
        },
        width: "90%", // Target width
        marginTop: "-5rem",
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <div className="flex w-full justify-center">
      <div
        ref={videoRef}
        className="bg-navy w-[80%] rounded-xl h-[100vh]"
      ></div>
    </div>
  );
};

export default Video;
