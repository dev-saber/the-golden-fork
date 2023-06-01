import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function NavLink({ text, navigation }) {
  if(navigation == undefined){
    navigation = ''
  }
  const navigate = useNavigate();
  return (
    <motion.p
      className="font-poppins text-goldenYellow font-bold cursor-pointer hover:underline md:text-xl lg:ml-16"
      onClick={() => navigate(`/${navigation}`)}
      whileTap={{
        scale: 0.8,
      }}
    >
      {text}
    </motion.p>
  );
}
