import React from "react";
import NavLink from "../components/navLink";

export default function NotFound() {
  return (
    <div className="bg-bgBlack w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <div className="flex flex-col items-center">
        <p className="font-yellowtail text-goldenYellow text-[11rem]">404</p>
        <p className="font-popins text-white text-xl -mt-8">Page Not Found</p>
        </div>
        <div className="flex justify-center items-center lg:mr-12">
        <NavLink text="Return To The Home Page" />
        </div>
      </div>
    </div>
  );
}
