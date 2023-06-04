import React from "react";
import BackArrow from "../components/backArrow";
import ReservationForm from "../components/reservationForm";

export default function Reservation() {
  return (
    <div className="bg-bgBlack w-full h-[100%] pt-20 gap-24 flex flex-col md:gap-32 items-center pb-8">
      <BackArrow />
      <p className="glow font-bold text-xl px-8 text-center font-yellowtail md:text-4xl sm:w-1/2 md:w-[70%] lg:text-5xl lg:w-[65%]">
        No matter what the occasion, we have a table that’s just right for you
      </p>
      <ReservationForm />
    </div>
  );
}
