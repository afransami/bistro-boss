import React from "react";
import chefService from "../../../assets/home/chef-service.jpg";

const BistroBossSecition = () => {
  return (
    <div className="mb-20 relative">
      <div>
        <img className="rounded-xl" src={chefService} alt="" />
        <div className="rounded-xl absolute top-1/4 py-15 ml-10 left-40 px-50 w-2/3 bg-white text-center ">
          <div className="flex-none items-center">
            <h1 className="text-4xl my-5 font-semibold">Bistro Boss</h1>
            <p className="mb-10 mx-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum deserunt ratione dolor
              officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
              nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BistroBossSecition;
