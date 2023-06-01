import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function BackArrow() {
  const navigate = useNavigate();
  const handleNavigation = () => {};
  return (
    <div className="absolute left-24 lg:left-28 top-24">
        <Link to="/"><img
    src="/images/arrow.svg"
    className="w-[32px] cursor-pointer"
    alt="arrow"
  /></Link>
    </div>
    
    
  );
}
