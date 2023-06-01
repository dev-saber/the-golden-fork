import React from "react";
import Title from "../components/title";
import MenuData from "../services/menuData";
import Meal from "../components/meal";
import Footer from "../components/footer";
import BackArrow from "../components/backArrow";

export default function Menu() {
  const data = MenuData();
  const content = data.map((category) => {
    return (
      <div className="flex flex-col items-center gap-16 lg:gap-24">
        <Title text={category.title} />

        <div className="flex flex-col items-center gap-8 lg:gap-28 mx-auto w-5/6 lg:w-auto">
        <div className="flex flex-col items-start gap-8 w-3/5 lg:flex-row lg:w-full lg:gap-28">
          {category.meals.slice(0, 2).map((meal) => {
            return (
              <Meal
                title={meal.meal_name}
                price={meal.meal_price}
                image={meal.image_path}
              />
            );
          })}
        </div>
        <div className="flex flex-col items-start gap-8 w-3/5 lg:flex-row lg:w-full lg:gap-28">
          {category.meals.slice(2).map((meal) => {
            return (
              <Meal
                title={meal.meal_name}
                price={meal.meal_price}
                image={meal.image_path}
              />
            );
          })}
        </div>
        </div>
      </div>
    );
  });
  return (
    <div className="bg-bgBlack w-full h-[100%] pt-20 gap-24 flex flex-col md:gap-32 text-white">
      <BackArrow/>
      {content}
      <Footer />
    </div>
  );
}
