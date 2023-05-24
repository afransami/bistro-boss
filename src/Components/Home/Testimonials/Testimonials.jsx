import React, { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import qoute from "../../../assets/icon/quote-left 1.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Testimonials = () => {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div>
      <SectionTitle
        subHeading={"-What Our Clients Say"}
        heading={"Testimonial"}>    
    </SectionTitle>

      <Swiper
      navigation={true} 
      modules={[Navigation]} 
      className="mySwiper">

        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="text-center flex flex-col items-center justify-center">
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <img src={qoute} alt="" />
              <p className="py-8 px-20">{review.details}</p>
              <h3 className="text-2xl text-orange-400 pb-8">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
