import React from 'react';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import featuredimg from '../../../assets/home/featured.jpg'
import './Featured.css';


const Featured = () => {
    return (
        <div className='featured-section pt-2 bg-fixed'>
            <SectionTitle
            subHeading=
            {'Check it out'}
            heading={'Popular Items'}
            ></SectionTitle>
            <div className='grid lg:grid-cols-2 items-center  mx-36 mb-10 '>
                <div className='pb-20'>
                    <img className=' rounded-xl' src={featuredimg} alt="" />
                    </div>
                <div className='flex-none items-center text-white rounded-lg ml-10 '>
                <p className='text-xl'>Marh 20, 2023</p>
                <h3 className='text-xl'>WHERE CAN I GET SOME?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptas aspernatur esse maxime reiciendis magni earum officiis molestias tenetur molestiae aut quod fugiat, eveniet dignissimos et corporis a eligendi alias dolorem repellendus voluptates?</p>
                <div className='mt-5'><button className="btn btn-outline btn-warning border-0 border-b-4 mt-4 text-yellow-500">Read More</button></div>
                </div>

            </div>
        </div>
    );
};

export default Featured;