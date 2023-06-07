import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Title from "../../components/title";
import NavLink from "../../components/navLink";
import ModalWindow from "../../components/modalWindow";

export default function Purchase() {
  const [modal, setModal] = useState(false);
  const cart = useSelector((state) => state.cart.cart);

  const navigate = useNavigate();

  const handleOrder = () => {
    cart.length ? navigate("/order") : setModal(true);
  };

  return (
    <div className="flex flex-col items-center mt-8 gap-28 md:mt-16">
      <div
        id="reservation"
        className="flex flex-col items-center gap-8 lg:flex-row lg:gap-0 lg:px-32"
      >
        <img
          src="images/reservation-img.png"
          alt="reservation-img"
          className="w-[70%] md:w-[390px]"
        />
        <div className="flex flex-col gap-4 items-center lg:items-start lg:gap-16">
          <p className="font-poppins text-white px-16 text-justify md:text-xl md:w-[85%] lg:text-2xl">
            At The Golden Fork, we believe that fine dining is more than just a
            meal; it's an experience. We invite you to join us for a culinary
            journey that will tantalize your taste buds and leave you with
            memories to last a lifetime.
          </p>
          <NavLink text="Make Your Reservation" navigation="reservation" />
        </div>
      </div>

      <Title text="Or" />

      <div
        id="order"
        className="flex flex-col items-center gap-8 lg:flex-row-reverse lg:gap-0 lg:px-32"
      >
        <img
          src="/images/order-img.png"
          alt="order-img"
          className="w-[70%] md:w-[390px]"
        />
        <div className="flex flex-col gap-4 items-center lg:items-start lg:gap-16">
          <p className="font-poppins text-white px-16 text-justify md:text-xl md:w-[85%] lg:text-2xl">
            Experience the art of fine dining from the comfort of your own home
            with The Golden Fork's online ordering system. Simply browse our
            menu, select your dishes, and place your order.
          </p>

          <motion.button
            onClick={handleOrder}
            className="font-poppins text-goldenYellow font-bold cursor-pointer hover:underline md:text-xl lg:ml-16"
            whileTap={{
              scale: 0.8,
            }}
          >
            Make Your Online Order
          </motion.button>

          {modal && (
            <ModalWindow open={modal} close={() => setModal(false)}>
              <p className="font-poppins text-center">
                The cart is empty, please have a look on the Menu page and add
                some meals to your order.
              </p>
            </ModalWindow>
          )}
        </div>
      </div>
    </div>
  );
}
