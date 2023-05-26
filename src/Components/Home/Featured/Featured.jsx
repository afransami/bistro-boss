import React from 'react';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import featuredimg from '../../../assets/home/featured.jpg'
// import './Featured.css';


const Featured = () => {
    return (
        <div className='featured-section pt-2 bg-fixed'>
            <SectionTitle
            subHeading=
            {'Check it out'}
            heading={'Popular Items'}
            ></SectionTitle>

<div className="relative">
      <img src={featuredimg} alt="Image" className="rounded-xl w-full lg:h-[600px] h-auto" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">        
        <div className="w-full px-20 items-center h-3/4 gap-4 justify-center flex p-10 overflow-hidden">
        <img className="rounded-xl lg:w-1/2" src={featuredimg} alt="" />
          <p className="text-white lg:w-1/2 text-lg font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            fugit quae officia nemo ipsam, omnis harum ea reiciendis, excepturi
            est officiis accusamus minima quis fugiat, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus architecto quaerat facilis, quas inventore dolor perferendis, nisi, repudiandae qui aspernatur quo! Officia cum hic quas qui! Ab quisquam minima delectus?
          </p>
        </div>
      </div>
    </div>


        </div>
    );
};

export default Featured;