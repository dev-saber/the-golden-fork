import React from "react";
import Title from "../components/title";

import MenuCategory from "../components/menuCategory";
import MenuData from "../services/menuData";

export default function Menu() {
  const data = MenuData();
  return (
    <div id="menu" className="flex flex-col items-center gap-8 lg:gap-24">
      <Title text="Menu" />
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-56">
        {/* Rendering the first 2 categories */}
        {data.slice(0, 2).map((category) => {
          return <MenuCategory cat={category.title} />;
        })}
      </div>
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-56">
        {/* Rendering the last 2 categories */}
        {data.slice(2).map((category) => {
          return <MenuCategory cat={category.title} />;
        })}
      </div>
    </div>
  );
}
