import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    

    return (
        <div className='text-center my-5 md:w-3/12 mx-auto'>
         <p className='text-yellow-600 my-2'>---{subHeading}---</p>
         <h1 className='uppercase border-y-4 text-3xl py-4'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;