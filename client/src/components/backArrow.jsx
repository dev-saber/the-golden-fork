import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function BackArrow() {
  const navigate = useNavigate();
  return (
    <div
      className="absolute -mt-8 left-8 md:mt-0 md:left-24 lg:left-28 lg:top-24"
      onClick={() => navigate("/")}
    >
      <motion.img
        src="/images/arrow.svg"
        className="w-4/5 md:w-[32px] cursor-pointer"
        alt="arrow"
        whileTap={{
          scale: 0.8,
          x: -50,
        }}
      />
    </div>
  );
}
