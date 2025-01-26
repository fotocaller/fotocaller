const ContactUsBtn = () => {
  return (
    <div className="hidden md:block">
      <a
        target="_blank"
        href="https://mail.google.com/mail/?view=cm&fs=1&to=business@fotocaller@gmail.com"
        className="flex items-center justify-center gap-2 shadow-md rounded-full px-5 py-3 uppercase bg-white"
      >
        Contact Us
        <img className="w-5" src="/assets/up-right-arrow.svg" alt="" />
      </a>
    </div>
  );
};

export default ContactUsBtn;
