import BulletPoint from "../components/BulletPoint";

const ReadyToBook = () => {
  return (
    <div className="p-10 my-20">
      <BulletPoint
        bulletColor="navy"
        textColor="navy"
        text="Ready to Book Your Perfect Photographer?"
        textSize="3xl"
      />
      <h3 className="text-5xl w-[70%] my-10">
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
