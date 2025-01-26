import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BulletPoint from "./BulletPoint";

gsap.registerPlugin(ScrollTrigger);

const WhyFotoCaller = () => {
  const h3Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (h3Ref.current) {
      // Split the text into words and wrap each word in a <span>
      const words = h3Ref.current.textContent?.split(" ") || [];
      h3Ref.current.innerHTML = words
        .map((word) => `<span style="color: #A7A7A7">${word} </span>`)
        .join("");

      const spans = h3Ref.current.querySelectorAll("span");

      // GSAP Animation for color change
      gsap.to(spans, {
        scrollTrigger: {
          trigger: h3Ref.current,
          start: "top 80%", // Animation starts when the element reaches 80% of the viewport
          end: "bottom 50%", // Animation ends when the element reaches 50% of the viewport
          scrub: true, // Smooth animation tied to scroll position
          // markers: true,
        },
        color: "#2F4156", // Target color (navy in your palette)
        stagger: 0.1, // Animate each word with a slight delay
        ease: "power1.inOut", // Smooth easing
      });
    }
  }, []);

  return (
    <div className="p-10 my-20">
      <BulletPoint
        bulletColor="navy"
        textColor="navy"
        text="Why Fotocaller?"
        textSize="3xl"
      />
      <h3 ref={h3Ref} className="text-5xl w-[70%]">
        Fotocaller is your ultimate platform for hiring skilled photographers
        for any occasion. Whether it’s a wedding, corporate event, family
        portrait, or product shoot, we connect you with trusted professionals
        who deliver stunning results.
      </h3>
    </div>
  );
};

export default WhyFotoCaller;
