import React from "react";

const FoodCard = ({item}) => {
    const {name, image, price, recipe}= item;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl w-full h-[300px] bg-contain"
        />
      </figure>
      <div className="badge badge-primary font-bold text-lg top-14 right-10 absolute">$ {price}</div>
      {/* <p><small>{price}</small></p> */}
      <div className="card-body bg-gray-100 items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-outline btn-warning border-0 border-b-4 mt-4 text-yellow-500">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
