import React, { useEffect, useState } from "react";

export default function Meal({ title, price, image }) {
  return (
    <div className="flex items-center w-4/5 sm:w-auto">
      <div className="max-w-[20%] mx-5">
        <img src={`/images/${image}`} alt="" className="w-full h-auto" />
      </div>
      <div className="flex flex-col items-start">
        <p className="font-yellowtail text-lg sm:text-xl md:text-2xl lg:text-3xl">
          {title}
        </p>
        <p className="font-poppins text-sm sm:text-lg text-goldenYellow">
          {price} MAD
        </p>
      </div>
    </div>
  );
}
