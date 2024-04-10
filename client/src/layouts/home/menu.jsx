import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Title from "../../components/title";
import MenuCategory from "./menuCategory";
import NavLink from "../../components/navLink";
import LoadingSpin from "../../components/loadingSpin";
import { fetchMenu } from "../../redux/slices/menuSlice";

export default function Menu() {
  const menu = useSelector((state) => state.menu);
  let data;
  const categories = [
    { id: 1, title: "Appetizers" },
    { id: 2, title: "Salads" },
    { id: 3, title: "Pasta" },
    { id: 4, title: "Desserts" },
  ];

  if (menu.loading) {
    data = [];
  } else if (menu.error) {
    console.error(menu.error);
  } else if (menu.menu.length) {
    data = menu.menu;
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMenu());
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1.5 * 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div id="menu" className="flex flex-col items-center gap-8 lg:gap-24">
      <Title text="Menu" />
      {isLoading ? (
        <div className="mt-16">
          <LoadingSpin menu={true} />
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-56">
            {/* Rendering the first 2 categories */}
            {categories.slice(0, 2).map((category) => (
              <MenuCategory cat={category.title} key={category.id} />
            ))}
          </div>
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-56">
            {/* Rendering the last 2 categories */}
            {categories.slice(2).map((category) => (
              <MenuCategory cat={category.title} key={category.id} />
            ))}
          </div>
          <NavLink text="View Menu" navigation="menu" />
        </>
      )}
    </div>
  );
}
