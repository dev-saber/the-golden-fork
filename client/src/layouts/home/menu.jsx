import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Title from "../../components/title";
import MenuCategory from "../../components/menuCategory";
import NavLink from "../../components/navLink";
import { fetchMenu } from "../../redux/slices/menuSlice";

export default function Menu() {
  const menu = useSelector((state) => state.menu);
  let data;

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

  return (
    <div id="menu" className="flex flex-col items-center gap-8 lg:gap-24">
      <Title text="Menu" />
      {data && data.length > 0 && (
        <>
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-56">
            {/* Rendering the first 2 categories */}
            {data.slice(0, 2).map((category) => (
              <MenuCategory cat={category.title} key={category.id} />
            ))}
          </div>
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-56">
            {/* Rendering the last 2 categories */}
            {data.slice(2).map((category) => (
              <MenuCategory cat={category.title} key={category.id} />
            ))}
          </div>
        </>
      )}
      <NavLink text="View Menu" navigation="menu" />
    </div>
  );
}
