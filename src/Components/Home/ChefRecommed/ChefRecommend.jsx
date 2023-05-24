import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import ChefRecommendCard from './ChefRecommendCard';

const ChefRecommend = () => {
    const [menu, setMenu]= useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then (res => res.json())
        .then (data =>{            
            // console.log(data)
            setMenu(data)
        })
    },[])

    return (
        <div>
            <SectionTitle
            heading={'Chef Recommends'}
            subHeading={'Should I Try'}            
            ></SectionTitle>

            <div className='grid lg:grid-cols-3 '>
                {
                    menu.map((chefCard)=>
                        <ChefRecommendCard
                        key={chefCard._id}
                        chefCard={chefCard}
                        ></ChefRecommendCard>
                    )
                }
            </div>

        </div>
    );
};

export default ChefRecommend;