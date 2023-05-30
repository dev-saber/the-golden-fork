import React from "react";

export default function NavLink({ text }) {
  return (
    <p className="font-poppins text-goldenYellow font-bold cursor-pointer hover:underline md:text-xl lg:ml-16">
      {text}
    </p>
  );
}
