const HomeText = () => {
  return (
    <div className="uppercase flex flex-col justify-center items-center text-7xl font-semibold gap-4 my-40">
      <div className="flex gap-2 items-center">
        <div className="text-sm font-light flex flex-col items-end">
          <h3>Stories</h3>
          <h3>Framed</h3>
          <h3>Perfectly</h3>
        </div>
        <h1>We capture</h1>
      </div>
      <div>
        <h1 className="flex items-center">
          <span className="text-navy">moments</span>
          <img
            className="w-32 h-14 rounded-md object-cover mx-8"
            src="/assets/marriage.gif"
            alt=""
          />
          and
        </h1>
      </div>
      <div>
        <h1>turn them into memories</h1>
      </div>
    </div>
  );
};

export default HomeText;
