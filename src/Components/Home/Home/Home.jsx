import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import BistroBossSecition from '../BistroBossSecition/BistroBossSecition';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Category></Category>
            <BistroBossSecition></BistroBossSecition>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;