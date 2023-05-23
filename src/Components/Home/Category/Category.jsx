import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper uppercase my-20"
    >
      <SwiperSlide >
        <img src={slide1} alt="" />
        <h3 className="uppercase text-2xl text-white -mt-10">Salad</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" />
        <p className="uppercase text-white text-2xl -mt-10">Soup</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
        <p className="uppercase text-white text-2xl -mt-10">Deserts</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />
        <p className="uppercase text-white text-2xl -mt-10">Pizzas</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" />
        <p className="uppercase text-white text-2xl -mt-10">Salad</p>
      </SwiperSlide>
    </Swiper>
  );
};

export default Category;
