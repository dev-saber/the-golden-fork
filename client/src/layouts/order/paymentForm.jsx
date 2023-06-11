import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { OrderInfo } from "../../redux/slices/orderSlice";

export default function PaymentForm({ prev, data }) {
  const dispatch = useDispatch();

  const handleOrder = () => {
    dispatch(OrderInfo(data));
  };

  return (
    <form action="" method="post" onSubmit={(event) => event.preventDefault()}>
      <div className="flex gap-8">
        <motion.p
          whileTap={{
            scale: 0.8,
          }}
          className="font-poppins text-goldenYellow font-bold cursor-pointer hover:underline md:text-xl lg:ml-16"
          onClick={prev}
        >
          Go Back
        </motion.p>

        <motion.button
          whileTap={{
            scale: 0.8,
          }}
          className="font-poppins text-goldenYellow font-bold cursor-pointer hover:underline md:text-xl lg:ml-16"
          onClick={handleOrder}
        >
          Confirm Purchase
        </motion.button>
      </div>
    </form>
  );
}
