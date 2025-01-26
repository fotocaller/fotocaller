import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BulletPoint from "../components/BulletPoint";

gsap.registerPlugin(ScrollTrigger);

const ReadyToBook = () => {
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
        text="Ready to Book Your Perfect Photographer?"
        textSize="3xl"
      />
      <h3
        ref={h3Ref}
        className="text-2xl xs:text-3xl sm:text-5xl w-[90%] md:w-[70%] my-10"
      >
        With Fotocaller, finding the perfect photographer is no longer a hassle.
        Whether it’s your wedding day, a family gathering, or a corporate event,
        we’ve got professionals ready to capture every detail. From booking to
        receiving your photos, we ensure a seamless and delightful experience.
      </h3>
      <div className="flex gap-5">
        <button>
          <img src="/assets/google-play-btn.svg" alt="" />
        </button>
        <button>
          <img src="/assets/apple-store-btn.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default ReadyToBook;
