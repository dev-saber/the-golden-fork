import React from "react";
import Restaurant from "../assets/images/restaurant-img.png";
import Title from "../components/title";
import Dish from "../assets/images/meal-dish-img.png";

export default function About() {
  return (
    <div className="mt-8 flex flex-col items-center gap-8 md:gap-16 md:mt-16 lg:gap-24">
      <Title text="About" />
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-0 lg:px-32">
        <img
          src={Restaurant}
          alt="restaurant-img"
          className="w-[70%] md:w-[390px]"
        />
        <p className="font-poppins text-white px-16 text-justify md:text-xl md:w-[85%] lg:text-2xl">
          The Golden Fork is a sophisticated high-end restaurant with an elegant
          decor and a carefully crafted menu. The restaurant's focus is on using
          only the freshest, highest-quality ingredients, with an emphasis on
          locally-sourced produce and meats. The attentive and knowledgeable
          staff provide impeccable service, making it the perfect choice for any
          occasion.
        </p>
      </div>
      <div className="flex flex-col items-center gap-8 md:gap-12 lg:gap-0 lg:flex-row-reverse lg:justify-around">
        <img src={Dish} alt="meal-dish-img" className="w-[70%] md:w-[390px]" />
        <p className="glow font-bold text-xl px-8 text-center font-yellowtail md:text-4xl md:w-[70%] lg:text-5xl lg:w-[50%]">
          "Every dish is a celebration of fresh and high-quality ingredients."
        </p>
      </div>
    </div>
  );
}
