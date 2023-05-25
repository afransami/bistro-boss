import React from "react";
import { Helmet } from "react-helmet";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../Hooks/UseMenu";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";
import PopularMenu from "../PopularMenu/PopularMenu";

const Menu = () => {
    const [menu]= useMenu();
    const desserts = menu.filter((item) => item.category === "desserts");
    const soup = menu.filter((item) => item.category === "soup");
    const pizza = menu.filter((item) => item.category === "pizza");
    const salad = menu.filter((item) => item.category === "salad");
    const offered = menu.filter((item) => item.category === "offered");
    const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <Cover img={menuImg} title={"Our Menu"}></Cover>      
      {/* <PopularMenu></PopularMenu> */}
      {/* main cover */}
      <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>
      {/* offered manu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* desserts menu items */}
      <MenuCategory items={desserts} title={'Dessert'}></MenuCategory>
      <MenuCategory items={soup} title={'soup'}></MenuCategory>
      <MenuCategory items={salad} title={'salad'}></MenuCategory>
      <MenuCategory items={drinks} title={'drinks'}></MenuCategory>
      <MenuCategory items={pizza} title={'pizza'}></MenuCategory>
      
    </div>
  );
};

export default Menu;
