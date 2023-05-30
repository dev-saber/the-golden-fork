import React from "react";
import Title from "../components/title";
import MenuData from "../services/menuData";
import Meal from "../components/meal";
import Footer from "../components/footer";

export default function Menu() {
  const data = MenuData();
  const content = data.map((category) => {
    return (
      <div className="flex flex-col items-center">
        <Title text={category.title} />

        <div className="flex flex-col items-start gap-8">
          {category.meals.map((meal) => {
            return <Meal title={meal.meal_name} price={meal.meal_price} />;
          })}
        </div>
      </div>
    );
  });
  return (
    <div className="bg-bgBlack w-full h-[100%] pt-20 gap-24 flex flex-col md:gap-32 text-white">
      {content}
      <Footer />
    </div>
  );
}
