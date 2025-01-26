interface SliderContentProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const SliderContent = ({
  title,
  description,
  imageSrc,
  imageAlt,
}: SliderContentProps) => {
  return (
    <div className="flex justify-center items-center lg:px-32 gap-10 my-20">
      <div className="text-center md:w-[70%]">
        <h1 className="text-5xl md:text-7xl md:mb-5 uppercase">{title}</h1>
        <div className="md:hidden my-5 flex justify-center">
          <img
            className="w-[25rem] h-[24rem] object-cover rounded-xl"
            src={imageSrc}
            alt={imageAlt}
          />
        </div>
        <h4 className="text-xl md:text-2xl font-light">{description}</h4>
      </div>
      <div className="hidden md:block w-[50%]">
        <img
          className="w-[25rem] h-[24rem] object-cover rounded-xl"
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
    </div>
  );
};

export default SliderContent;
