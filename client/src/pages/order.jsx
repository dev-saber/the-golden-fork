import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import LoadingSpin from "../components/loadingSpin";
import CartTable from "../components/cartTable";
import OrderForm from "../layouts/order/orderForm";
import BackArrow from "../components/backArrow";

function Order() {
  const order = useSelector((state) => state.cart.cart);
  const [total, setTotal] = useState(0);

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    address: "",
    delivery_time: "",
  });

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

  const [step, setStep] = useState(0);
  const steps = [
    <CartTable
      action={() => setStep((prev) => prev + 1)}
      order={order}
      total={total}
      actionText="Purchase"
    />,
    <OrderForm
      prev={() => setStep((prev) => prev - 1)}
      formValues={formValues}
      setFormValues={setFormValues}
      total={total}
    />,
  ];

  return (
    <>
      <div className={`${loading ? "bg-bgBlack h-screen" : "hidden"}`}></div>
      <div className="p-28 bg-bgBlack">
        {loading && <LoadingSpin />}
        <div
          className={`${
            loading
              ? "hidden"
              : "w-full h-screen pt-20 gap-24 flex flex-col items-center pb-8"
          }`}
        >
          <BackArrow />
          {!step && (
            <div className="flex flex-col items-center gap-16 -mb-16">
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
            </div>
          )}

          {steps[step]}
        </div>
      </div>
    </>
  );
}

export default Order;
