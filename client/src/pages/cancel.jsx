import React from "react";
import NavLink from "../components/navLink";

export default function Cancel() {
  return (
    <div className="bg-bgBlack w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <p className="font-yellowtail text-white text-8xl text-center">
          Payment Canceled
        </p>
        <div className="flex justify-center items-center lg:mr-12">
          <NavLink text="Return To The Home Page" />
        </div>
      </div>
    </div>
  );
}
