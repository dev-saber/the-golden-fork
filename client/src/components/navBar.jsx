import React, { useState } from "react";
import Logo from "../assets/images/the-golden-fork-logo.svg";

export default function NavBar() {
  const [isShown, setIsShown] = useState(false);
  const showMenu = () => setIsShown((prev) => !prev);

  return (
    <div className="font-yellowtail max-w-screen-xl flex flex-wrap mx-auto p-4 items-center justify-around md:gap-36">
      <img src={Logo} className="w-1/5 md:w-[10%] lg:-ml-24" alt="Logo" />
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
        onClick={() => showMenu()}
      >
        <svg
          className="w-12 h-12"
          aria-hidden="true"
          fill="white"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>

      <ul
        className={`border-none text-center bg-bgBlack bg-opacity-60 text-2xl top-20 right-24 text-goldenYellow flex-col justify-around w-[50%] p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:border-0 md:relative md:top-0  md:flex md:w-auto ${
          isShown ? "absolute" : "hidden"
        }`}
      >
        <li>About</li>
        <li>Menu</li>
        <li>Reservation</li>
        <li>Online Order</li>
      </ul>
    </div>
  );
}
