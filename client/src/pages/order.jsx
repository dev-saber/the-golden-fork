import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import LoadingSpin from "../components/loadingSpin";
import CartTable from "../components/cartTable";
import BackArrow from "../components/backArrow";
import { paymentCheckout } from "../api/paymentCheckout";

function Order() {
  const order = useSelector((state) => state.cart.cart);
  const [total, setTotal] = useState(0);

  const orderDetails = {
    mealsInfo: useSelector((state) => state.cart.cart),
    amount: total,
  };

  useEffect(() => {
    const newTotal = order.reduce((acc, meal) => {
      return acc + meal.price * meal.quantity;
    }, 0);
    setTotal(newTotal);
  }, [order]);

  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 750);

  const navigate = useNavigate();

  const [checkout, setCheckout] = useState(false);
  const handleCheckout = () => {
    paymentCheckout(orderDetails);
    setCheckout(true);
  };

  return (
    <>
      <div className={`${loading ? "bg-bgBlack h-screen" : "hidden"}`}></div>
      <div className={`bg-bgBlack`}>
        {loading && <LoadingSpin />}

        <div
          className={`${
            checkout
              ? "fixed inset-0 bg-black bg-opacity-80 w-full h-full z-10"
              : "hidden"
          }`}
        >
          {checkout && <LoadingSpin />}
        </div>
        <div
          className={`${
            loading
              ? "hidden"
              : "w-full gap-24 flex flex-col items-center pb-8 h-screen"
          }`}
        >
          <BackArrow />
          <div className="flex flex-col items-center gap-16 mt-16">
            <p className="glow font-bold text-xl px-8 text-center font-yellowtail md:text-4xl sm:w-1/2 md:w-[70%] lg:text-5xl lg:w-[65%]">
              Place your food order online from the confort of your own house
            </p>
            <motion.p
              whileTap={{
                scale: 0.8,
              }}
              className="font-poppins text-goldenYellow font-bold cursor-pointer hover:underline md:text-xl lg:ml-16"
              onClick={() => navigate("/menu")}
            >
              Add more meals
            </motion.p>

            <CartTable
              order={order}
              total={total}
              action={handleCheckout}
              actionText={"Checkout"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
