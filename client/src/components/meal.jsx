import React from "react";

export default function Meal({ title, price, image }) {
  return (
    <div className="flex items-center w-auto">
      <div className="w-[150px] md:w-[200px] lg:w-[300px] mx-5">
        <img src={`/images/${image}`} alt="" className="w-4/5 lg:w-[190px]" />
      </div>
      <div className="flex flex-col items-start w-1/3 lg:w-[170px] lg:-ml-28 xl:w-[320px] lg:gap-4">
        <p className="font-yellowtail text-lg sm:text-xl md:text-2xl lg:text-3xl">
          {title}
        </p>
        <p className="font-poppins text-sm sm:text-lg text-goldenYellow font-bold lg:text-xl">
          {price} MAD
        </p>
      </div>
    </div>
  );
}
