import BulletPoint from "../components/BulletPoint";
import SliderContent from "../components/SliderContent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const HorizontalScroll = () => {
  return (
    <div className="bg-navy p-10 min-h-screen text-white swiper-page">
      <BulletPoint
        bulletColor="white"
        textColor="white"
        text="Booking a Photographer Made Simple"
        textSize="3xl"
      />
      <Swiper
        direction={"horizontal"}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SliderContent
            title="Search & Compare"
            description="Browse a curated list of photographers by style, occasion, or budget. Check portfolios, ratings, and blogs for inspiration."
            imageSrc="/assets/mobile-1.png"
            imageAlt="Mobile image 1 showing search and compare functionality"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent
            title="Book & Shoot"
            description="Compare options and secure your photographer with transparent pricing and no hidden fees. Enjoy a seamless photoshoot where your vision becomes reality."
            imageSrc="/assets/mobile-2.png"
            imageAlt="Mobile image 2 showing search and compare functionality"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent
            title="Receive Photos"
            description="Share your feedback to help photographers grow and the community thrive. Download professionally edited photos directly from the app—secure and hassle-free."
            imageSrc="/assets/mobile-3.png"
            imageAlt="Mobile image 3 showing search and compare functionality"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HorizontalScroll;
