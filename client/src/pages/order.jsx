import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import LoadingSpin from "../components/loadingSpin";
import CartTable from "../layouts/order/cartTable";
import OrderForm from "../layouts/order/orderForm";
import PaymentForm from "../layouts/order/paymentForm";

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
  }, 200);

  const [step, setStep] = useState(0);
  const steps = [
    <CartTable
      next={() => setStep((prev) => prev + 1)}
      loading={loading}
      order={order}
      total={total}
    />,
    <OrderForm
      prev={() => setStep((prev) => prev - 1)}
      next={() => setStep((prev) => prev + 1)}
      formValues={formValues}
      setFormValues={setFormValues}
    />,
    <PaymentForm prev={() => setStep((prev) => prev - 1)} />,
  ];

  return (
    <>
      {loading && <LoadingSpin />}

      <div
        className={`${
          loading
            ? "hidden"
            : "bg-bgBlack w-full h-screen pt-20 gap-24 flex flex-col  items-center pb-8"
        }`}
      >
        {steps[step]}
      </div>
    </>
  );
}

export default Order;
