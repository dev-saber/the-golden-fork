import React from "react";

export default function Footer() {
  return (
    <div className="bg-bgBlack w-full font-yellowtail font-semibold text-xs glow flex justify-around py-4 md:text-lg lg:text-2xl">
      <p>
        Address:
        <br className="md:hidden" /> 123 Main Street, Rabat
      </p>
      <p>
        Phone:
        <br className="md:hidden" /> (212) 5 37 00 00 00
      </p>
      <p>
        Email:
        <br className="md:hidden" /> thegoldenforkcontact@gmail.com
      </p>
    </div>
  );
}
