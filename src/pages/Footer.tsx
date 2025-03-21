import { Link } from "react-router-dom";
import ContactUsBtn from "../components/ContactUsBtn";

const Footer = () => {
  const scrollToSection = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-navy relative p-10 h-full md:h-[40vh] flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-28 justify-center overflow-hidden">
      <img
        className="absolute top-0 left-0 opacity-[0.1] object-cover z-[-1]"
        src="/assets/bg.svg"
        alt=""
      />
      <div className="flex gap-6 md:gap-28 flex-col md:flex-row">
        <div className="z-10 w-48 lg:w-64">
          <ContactUsBtn />
        </div>
        <div>
          <h5 className="text-grey">Contact details</h5>
          <h4 className="text-white text-2xl">Maharashtra, India</h4>
          <h5 className="text-grey">business@fotocaller@gmail.com</h5>
        </div>
      </div>
      <div className="flex gap-14 md:gap-28">
        <div>
          <h5 className="text-grey">Social Media</h5>
          <a
            target="_blank"
            href="https://www.instagram.com/fotocaller?igsh=YXV6cXRyd3Y5NHRh"
            className="text-white text-2xl block"
          >
            Instagram
          </a>
          <a
            target="_blank"
            href="https://x.com/fotocaller?t=42h5O6ddjUoOBkW-NqsNTA&s=09"
            className="text-white text-2xl block"
          >
            Twitter
          </a>
          <a
            target="_blank"
            href="https://youtube.com/@fotocaller?si=YqXowauoEwzWB9Jn"
            className="text-white text-2xl block"
          >
            YouTube
          </a>
        </div>
        <div>
          <h5 className="text-grey">Navigation</h5>
          <a
            onClick={() => scrollToSection(".home-page")}
            className="text-white text-2xl block cursor-pointer"
          >
            About Us
          </a>
          <a
            onClick={() => scrollToSection(".swiper-page")}
            className="text-white text-2xl block cursor-pointer"
          >
            How It Works
          </a>
          <a
            onClick={() => scrollToSection(".download-page")}
            className="text-white text-2xl block cursor-pointer"
          >
            Download Now
          </a>
          <Link
            to="/policy"
            onClick={() => scrollToSection(".download-page")}
            className="text-white text-2xl block cursor-pointer"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
      <p className="absolute text-grey bottom-10 left-10 hidden md:block">
        fotocaller © 2025
      </p>
    </div>
  );
};

export default Footer;
