import ContactUsBtn from "./ContactUsBtn";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-5 z-10">
      <div className="flex justify-center items-center">
        <img className="w-24" src="/assets/logo.png" alt="" />
        <h3 className="text-3xl font-bold prevent-select">
          FOTO<span className="text-navy">CALLER</span>
        </h3>
      </div>
      <ContactUsBtn />
    </header>
  );
};

export default Header;
