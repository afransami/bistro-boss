import React from "react";

const ChefRecommendCard = ({chefCard}) => {
    const {name, recipe, image, category, price} = chefCard

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="image"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body bg-gray-100 items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className='mt-5'><button className="btn btn-outline btn-warning border-0 border-b-4 mt-4 text-yellow-500">Order Now</button></div>
      </div>
    </div>
  );
};

export default ChefRecommendCard;
