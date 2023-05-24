import React, { useEffect, useState } from 'react';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import MenuItems from '../Shared/MenuItems/MenuItems';

const PopularMenu = () => {
    const [menu, setMenu]= useState([])
    
    useEffect(()=>{
        fetch('menu.json')
        .then (res=> res.json())
        .then (data => {
            const popularItems = data.filter (item=> item.category === 'popular')
            setMenu(popularItems)
        })
    },[])
    return (
        <section className="mb-12">
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <div className='text-center mt-5'><button className="btn btn-outline btn-warning border-0 border-b-4 mt-4 text-yellow-500">View Full Menu</button></div>

            <div className='bg-black my-10 py-20 text-white text-center text-5xl rounded-xl'>
                <p>Call Us: +88 0192345678910</p>
            </div>
        </section>


    );
};

export default PopularMenu;