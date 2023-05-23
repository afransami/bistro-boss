import React, { useEffect, useState } from 'react';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Swiper, SwiperSlide } from "swiper/react";
import qoute from '../../../assets/icon/quote-left 1.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";


const Testimonials = () => {
    const [review, setReview] = useState([])
    useEffect(()=>{
        fetch('reviews.json')
        .then (res=> res.json())
        .then (data => setReview(data))        
    },[])


    return (
        <div>
            <SectionTitle
            subHeading={'-What Our Clients Say'} heading={'Testimonial'}
            ></SectionTitle>
            <div className='text-center flex flex-col items-center justify-center'>

                    
                        <Rating
      style={{ maxWidth: 180 }}
      value={3}
      readOnly
      
    />

                    
            
    <img src={qoute} alt="" />
            </div>

    <div>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {

        }
        <SwiperSlide></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
        </div>
     
    );
};

export default Testimonials;