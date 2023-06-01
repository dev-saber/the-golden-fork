import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function BackArrow() {
  const navigate = useNavigate();
  return (
    <div
      className="absolute left-24 lg:left-28 top-24"
      onClick={() => navigate("/")}
    >
      <motion.img
        src="/images/arrow.svg"
        className="w-[32px] cursor-pointer"
        alt="arrow"
        whileTap={{
          scale: 0.8,
          x: -50,
        }}
      />
    </div>
  );
}
