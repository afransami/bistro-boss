import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Category></Category>
        </div>
    );
};

export default Home;