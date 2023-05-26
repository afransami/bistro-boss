import React from "react";
import Cover from "../Shared/Cover/Cover";
import MenuItems from "../Shared/MenuItems/MenuItems";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="mt-8">
      {title && <Cover 
      className="h-[600px]"
      img={img}
      title={title}      
      ></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-10">
        
        {
        items.map(item => 
          <MenuItems 
          key={item._id}
          item={item}
          ></MenuItems>
        )}

      </div>
      <div className='text-center'>
      <Link to ={`/order/${title}`} className='mt-5'><button className="btn btn-outline w-1/2 btn-warning border-0 border-b-4 mt-4 text-yellow-500">Order Now</button></Link>
      </div>
    </div>
  );
};

export default MenuCategory;
