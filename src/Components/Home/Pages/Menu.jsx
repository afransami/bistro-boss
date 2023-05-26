import React from "react";
import { Helmet } from "react-helmet";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import dessertsImg from "../../../assets/menu/dessert-bg.jpeg";
import useMenu from "../../../Hooks/UseMenu";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";




const Menu = () => {
    const [menu]= useMenu();
    const desserts = menu.filter((item) => item.category === "dessert");
    const soup = menu.filter((item) => item.category === "soup");
    const pizza = menu.filter((item) => item.category === "pizza");
    const salad = menu.filter((item) => item.category === "salad");
    const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <Cover img={menuImg} title={"Our Menu"}></Cover>      
      
      {/* main cover */}
      <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>
         
      {/* offered manu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* desserts menu items */}
      <MenuCategory items={desserts} title={'Dessert'} img={dessertsImg}></MenuCategory>
      <MenuCategory items={soup} title={'soup'} img={soupImg}></MenuCategory>
      <MenuCategory items={salad} title={'salad'} img={saladImg}></MenuCategory>
      <MenuCategory items={pizza} title={'pizza'} img={pizzaImg}></MenuCategory>
      
    </div>
  );
};

export default Menu;
