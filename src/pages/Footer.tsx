import ContactUsBtn from "../components/ContactUsBtn";

const Footer = () => {
  return (
    <div className="bg-navy relative p-10 h-[50vh] flex justify-between overflow-hidden">
      <img
        className="absolute top-0 left-0 opacity-[0.1] object-cover"
        src="/assets/bg.svg"
        alt=""
      />
      <div className="z-10">
        <ContactUsBtn />
      </div>
      <div>
        <h5 className="text-grey">Contact details</h5>
        <h4 className="text-white text-2xl">Lorem ipsum doler sit 123123</h4>
        <h5 className="text-grey">business@fotocaller@gmail.com</h5>
      </div>
      <div>
        <h5 className="text-grey">Social Media</h5>
        <h4 className="text-white text-2xl">Instagram</h4>
        <h4 className="text-white text-2xl">Twittter</h4>
        <h4 className="text-white text-2xl">YouTube</h4>
      </div>
      <div>
        <h5 className="text-grey">Navigation</h5>
        <h4 className="text-white text-2xl">About Us</h4>
        <h4 className="text-white text-2xl">How It Works</h4>
        <h4 className="text-white text-2xl">Download Now</h4>
      </div>
      <p className="text-grey absolute bottom-10 left-10">fotocaller © 2025</p>
    </div>
  );
};

export default Footer;
