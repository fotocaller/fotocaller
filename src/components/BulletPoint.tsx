interface BulletPointProps {
  text: string;
  bulletColor: string;
  textColor: string;
  textSize: string;
}

const BulletPoint = ({
  text,
  bulletColor,
  textColor,
  textSize,
}: BulletPointProps) => {
  return (
    <div className={`flex gap-3 text-${textSize} items-center my-5`}>
      <div className={`bg-${bulletColor} w-5 h-5 rounded-full`}></div>
      {/* <h3 className={`text-${textColor}`}>{text}</h3> */}
      {textColor && text && <h3 className={`text-${textColor}`}>{text}</h3>}
    </div>
  );
};

export default BulletPoint;
