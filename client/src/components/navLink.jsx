import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavLink({ text, navigation }) {
  const navigate = useNavigate();
  return (
    <p
      className="font-poppins text-goldenYellow font-bold cursor-pointer hover:underline md:text-xl lg:ml-16"
      onClick={() => navigate(`/${navigation}`)}
    >
      {text}
    </p>
  );
}
