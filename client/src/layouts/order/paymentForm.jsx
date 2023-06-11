import React from "react";
import { motion } from "framer-motion";

export default function PaymentForm({ prev }) {
  const handleOrder = () => {};
  return (
    <form action="" method="post">
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
