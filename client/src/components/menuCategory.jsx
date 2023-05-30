import React, { useState, useEffect } from "react";
import NavLink from "./navLink";

export default function MenuCategory({ cat }) {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    import(`../assets/images/${cat}-img.png`)
      .then((image) => {
        setImageSrc(image.default);
      })
      .catch((error) => {
        console.error(`Failed to load image: ${error}`);
      });
  }, [cat]);

  return (
    <div className="flex flex-col items-center">
      {imageSrc && <img src={imageSrc} alt={cat} className="w-3/4 md:w-full" />}
      <div className="flex flex-col items-center -mt-6 gap-2 md:gap-4">
        <span className="font-yellowtail text-white text-3xl md:text-5xl">
          {cat}
        </span>
        <span className="lg:-ml-16">
          <NavLink text="View Menu" />
        </span>
      </div>
    </div>
  );
}
