import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import LoadingSpin from "../components/loadingSpin";
import StripeContainer from "../layouts/order/stripeContainer";
import CartTable from "../layouts/order/cartTable";

function Order() {
  const order = useSelector((state) => state.cart.cart);
  const [total, setTotal] = useState(0);

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
  const steps = [<CartTable next={() => setStep((prev) => prev + 1)} loading ={loading} order ={order} total={total}/>];

  return (
    <>
      {loading && <LoadingSpin />}
      <div className={`${loading ? "bg-bgBlack h-screen" : "hidden"}`}></div>
      {steps[step]}
      <StripeContainer />
    </>
  );
}

export default Order;
