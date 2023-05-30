import React from "react";
import Title from "../components/title";
import MenuCategory from "../components/menuCategory";
import MenuData from "../services/menuData";

export default function Menu() {
  const data = MenuData();
  const content = data.map(category => {
    console.log(category.meals)
   return (
    <div className="flex flex-col items-center">
        <Title text={category.title} />
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-56">
        {category.meals.slice(0, 2).map((meal) => {
          return 
        })}
      </div>
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-56">
        
        {category.meals.slice(2).map((meal) => {
          return 
        })}
      </div>
    </div>
   )
  })
  return (
    <div className="bg-bgBlack w-full h-[100%] gap-24 flex flex-col md:gap-32 text-white">
      {content}
    </div>
  );
}
