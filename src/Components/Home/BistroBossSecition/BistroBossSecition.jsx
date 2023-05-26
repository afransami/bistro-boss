import React from "react";
import chefService from "../../../assets/home/chef-service.jpg";


const BistroBossSecition = () => {
  return (
    <div className="relative">
      <img src={chefService} alt="Image" className="w-full h-auto" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="bg-white w-3/4 h-2/4 opacity-70 rounded-xl overflow-hidden p-10">
          <p className="text-black text-lg font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            fugit quae officia nemo ipsam, omnis harum ea reiciendis, excepturi
            est officiis accusamus minima quis fugiat,
          </p>
        </div>
      </div>
    </div>
  );
};

export default BistroBossSecition;
