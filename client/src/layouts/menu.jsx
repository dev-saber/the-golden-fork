import React from "react";
import Title from "../components/title";

import Appetizers from "../assets/images/Appetizers-img.png";
import Salads from "../assets/images/Salads-img.png";
import Pasta from "../assets/images/Pasta-img.png";
import Desserts from "../assets/images/Desserts-img.png";
import MenuCategory from "../components/menuCategory";

export default function Menu() {
  return (
    <div className="flex flex-col items-center gap-8 lg:gap-24">
      <Title text="Menu" />
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-56">
        <MenuCategory />
        <MenuCategory />
      </div>
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-56">
        <MenuCategory />
        <MenuCategory />
      </div>
    </div>
  );
}
