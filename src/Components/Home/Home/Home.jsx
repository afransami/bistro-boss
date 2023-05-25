import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import BistroBossSecition from "../BistroBossSecition/BistroBossSecition";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import ChefRecommend from "../ChefRecommed/ChefRecommend";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Navbar></Navbar>
      <Banner></Banner>
      <Category></Category>
      <BistroBossSecition></BistroBossSecition>
      <PopularMenu></PopularMenu>
      <div className="bg-black my-10 py-20 text-white text-center text-5xl rounded-xl">
        <p>Call Us: +88 0192345678910</p>
      </div>
      <ChefRecommend></ChefRecommend>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
