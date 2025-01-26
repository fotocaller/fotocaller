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
    <div className="flex justify-center items-center px-40 gap-10 my-20">
      <div className="w-[70%]">
        <h1 className="text-7xl uppercase w-[70%]">{title}</h1>
        <h4 className="text-2xl font-light">{description}</h4>
      </div>
      <div className="w-[50%]">
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
