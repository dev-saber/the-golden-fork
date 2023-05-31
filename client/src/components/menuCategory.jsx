import React from "react";

export default function MenuCategory({ cat }) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={`/images/${cat}-img.png`}
        alt={cat}
        className="w-3/4 md:w-full"
      />
      <span className="font-yellowtail text-white text-3xl md:text-5xl">
        {cat}
      </span>
    </div>
  );
}
