import React from "react";
import Cover from "../Shared/Cover/Cover";
import MenuItems from "../Shared/MenuItems/MenuItems";

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
    </div>
  );
};

export default MenuCategory;
