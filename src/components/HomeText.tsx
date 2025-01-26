import { useEffect } from "react";
import gsap from "gsap";

const HomeText = () => {
  useEffect(() => {
    // Animate elements with GSAP when the component mounts
    gsap.fromTo(
      ".fade-in-up-delay",
      { opacity: 0, y: "5rem" },
      { opacity: 1, y: "0", duration: 1, ease: "power3.out", delay: 0.3 }
    );

    gsap.fromTo(
      ".fade-in-up-delay-2",
      { opacity: 0, y: "5rem" },
      { opacity: 1, y: "0", duration: 1, ease: "power3.out", delay: 0.6 }
    );

    gsap.fromTo(
      ".fade-in-up-delay-3",
      { opacity: 0, y: "5rem" },
      { opacity: 1, y: "0", duration: 1, ease: "power3.out", delay: 0.9 }
    );

    gsap.fromTo(
      ".fade-in-up",
      { opacity: 0, x: "-5rem" },
      { opacity: 1, x: "0", duration: 1, ease: "power3.out", delay: 1.2 }
    );
  }, []);

  return (
    <div className="uppercase flex flex-col justify-center items-center text-3xl md:text-5xl lg:text-7xl font-semibold gap-4 my-20 md:my-40">
      <div className="flex gap-2 items-center">
        <div className="text-xs md:text-sm font-light flex flex-col items-end fade-in-up">
          <h3>Stories</h3>
          <h3>Framed</h3>
          <h3>Perfectly</h3>
        </div>
        <h1 className="fade-in-up-delay">We capture</h1>
      </div>
      <div>
        <h1 className="flex items-center fade-in-up-delay-2">
          <span className="text-navy">moments</span>
          <img
            className="w-20 md:w-32 h-8 md:h-14 rounded-md object-cover mx-4 md:mx-8"
            src="/assets/marriage.gif"
            alt=""
          />
          and
        </h1>
      </div>
      <div className="text-center">
        <h1 className="fade-in-up-delay-3">turn them into memories</h1>
      </div>
    </div>
  );
};

export default HomeText;
