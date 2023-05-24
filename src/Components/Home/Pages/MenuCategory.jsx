import React from "react";
import MenuItems from "../Shared/MenuItems/MenuItems";
import Cover from "../Shared/Cover/Cover";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-10">
      {title && <Cover img={coverImg} title={"Our Menu"}></Cover>}
        {title && items.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
