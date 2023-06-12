import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function NavBar() {
  const [isShown, setIsShown] = useState(false);
  const showMenu = () => setIsShown((prev) => !prev);

  return (
    <div className="max-w-screen-xl flex flex-wrap mx-auto p-4 items-center justify-around md:gap-36 relative z-10">
      <img
        src="/images/the-golden-fork-logo.svg"
        loading="lazy"
        className="w-1/5 md:w-[10%] lg:-ml-24"
        alt="Logo"
      />

      <motion.svg
        className="w-12 h-12 cursor-pointer z-10 md:hidden"
        onClick={() => showMenu()}
        aria-hidden="true"
        fill="white"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ rotate: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.line
          x1="3"
          y1="5"
          x2="17"
          y2="5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{ rotate: isShown ? 45 : 0, translateY: isShown ? 5 : 0 }}
        />
        <motion.line
          x1="3"
          y1="10"
          x2="17"
          y2="10"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{ opacity: isShown ? 0 : 1 }}
        />
        <motion.line
          x1="3"
          y1="15"
          x2="17"
          y2="15"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{ rotate: isShown ? -45 : 0, translateY: isShown ? -5 : 0 }}
        />
      </motion.svg>

      <motion.ul
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.3 }}
        className={`border-none text-center bg-bgBlack text-2xl top-0 right-0 bottom-0 left-0 text-goldenYellow flex flex-col justify-around w-full p-4 md:p-0 mt-0 border md:flex-row md:space-x-8 md:mt-0 md:border-0 md:relative md:top-0 md:bg-transparent md:flex md:w-auto md:text-white ${
          isShown ? "fixed" : "hidden"
        }`}
      >
        <Link
          to="about"
          smooth={true}
          duration={1000}
          className="cursor-pointer hover:glow w-2/3 self-center"
          onClick={() => showMenu()}
        >
          About
        </Link>
        <Link
          to="menu"
          smooth={true}
          duration={1250}
          className="cursor-pointer hover:glow w-2/3 self-center"
          onClick={() => showMenu()}
        >
          Menu
        </Link>
        <Link
          to="reservation"
          smooth={true}
          duration={1500}
          className="cursor-pointer hover:glow w-2/3 self-center"
          onClick={() => showMenu()}
        >
          Reservation
        </Link>
        <Link
          to="order"
          smooth={true}
          duration={1750}
          className="cursor-pointer hover:glow w-2/3 self-center md:w-full"
          onClick={() => showMenu()}
        >
          Online Order
        </Link>
      </motion.ul>
    </div>
  );
}
