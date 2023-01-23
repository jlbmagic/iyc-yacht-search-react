import "react-lazy-load-image-component/src/effects/blur.css";

import React, { useState } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Card({ data }) {
  //check to see if the image has loaded.
  const [loaded, setLoaded] = useState(false);
  //if the image has loaded, set the loaded state to true
  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <div className=" overflow-hidden border w-1/4 m-3 border-blue-grey-100 rounded-lg shadow-lg ">
      <div className="hover:scale-125  transition-all duration-1000 ease-in-out">
        <img
          onLoad={handleLoad}
          className={
            loaded ? "object-fit overflow-hidden aspect-4/3 w-full" : "hidden"
          }
          src={data.image || data.photo}
        ></img>
      </div>
      <div className="py-5 text-blue-grey-600 font-light">{data.name}</div>
    </div>
  );
}
