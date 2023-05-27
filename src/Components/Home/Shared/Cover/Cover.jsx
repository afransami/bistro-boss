import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
      className="w-full h-auto"
    >
      <div className="hero lg:h-[700px]">
        <div className="hero-content text-center text-neutral-content bg-black bg-opacity-30 px-30 rounded-xl">
          <div className="max-w-md mt-10">
            <h1 className="my-5 lg:text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
