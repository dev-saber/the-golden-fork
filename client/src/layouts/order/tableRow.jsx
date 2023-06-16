import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { modifyQuantity, removeFromCart } from "../../redux/slices/cartSlice";

function TableRow({ id, meal, price, count }) {
  const [quantity, setQuantity] = useState(count);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(modifyQuantity({ id: id, quantity: quantity }));
  }, [quantity]);

  return (
    <tr className="border-y border-goldenYellow">
      <td className="px-6 py-4 font-semibold text-white">{meal}</td>
      <td className="text-center text-white">{`${price} MAD`}</td>
      <td className="px-6 py-4">
        <div className="flex items-center space-x-3">
          <button
            className="inline-flex items-center p-1 text-sm font-medium bg-goldenYellow border rounded-full focus:outline-none border-goldenYellow"
            type="button"
            onClick={() => {
              if (quantity === 1) {
                // prevent the customer of giving a null or a negative value
                return;
              } else {
                setQuantity((prev) => prev - 1);
              }
            }}
          >
            <svg
              className="w-4 h-4 bg-goldednYellow text-bgBlack"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>

          <div>
            <input
              type="number"
              className="bg-goldenYellow text-bgBlack w-14 border border-gray-800 text-sm rounded-lg block px-2.5 py-1 placeholder-goldenYellow text-center"
              value={quantity}
            />
          </div>

          <button
            className="inline-flex items-center p-1 text-sm font-medium bg-goldenYellow border rounded-full focus:outline-none border-goldenYellow"
            type="button"
            onClick={() => {
              setQuantity((prev) => prev + 1);
            }}
          >
            <svg
              className="w-4 h-4 bg-goldenYellow text-bgBlack"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </td>
      <td className="px-6 py-4 font-semibold text-white">{`${
        quantity * price
      } MAD`}</td>
      <td className="px-6 py-4 text-goldenYellow font-semibold hover:underline cursor-pointer">
        <motion.p
          whileTap={{
            scale: 0.8,
          }}
          onClick={() => {
            dispatch(removeFromCart(id));
          }}
        >
          Remove
        </motion.p>
      </td>
    </tr>
  );
}

export default TableRow;
