import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

import ModalWindow from "../../components/modalWindow";

function AddToCart({ open, close }) {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const meal = useSelector((state) => state.mealModal.data);

  return (
    <ModalWindow open={open} close={close}>
      <div className="flex flex-col items-center">
        <div className="relative overflow-x-auto sm:rounded-lg">
          <table className=" w-full text-sm text-left">
            <thead className="text-lg text-center font-yellowtail">
              <tr>
                <th className="px-6 py-3">Product</th>
                <th className="px-6 py-3">Quantiy</th>
                <th className="px-6 py-3">Total</th>
              </tr>
            </thead>
            <tbody>
              <td className="flex flex-col gap-4 md:px-6 py-4 font-semibold text-bgBlack">
                <p className="font-poppins text-sm sm:text-lg font-bold lg:text-xl">
                  {meal.title}
                </p>
                <p className="font-poppins text-sm sm:text-lg font-bold lg:text-xl">
                  {meal.price} MAD
                </p>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center space-x-3">
                  <button
                    className="inline-flex items-center p-1 text-sm font-medium bg-bgBlack border rounded-full focus:outline-none border-bgBlack"
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
                      className="w-4 h-4 bg-bgBlack text-goldenYellow"
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
                      className="bg-bgBlack text-goldenYellow w-14 border border-gray-800 text-sm rounded-lg block px-2.5 py-1 placeholder-goldenYellow text-center"
                      value={quantity}
                    />
                  </div>

                  <button
                    className="inline-flex items-center p-1 text-sm font-medium bg-bgBlack border rounded-full focus:outline-none border-bgBlack"
                    type="button"
                    onClick={() => setQuantity((prev) => prev + 1)}
                  >
                    <svg
                      className="w-4 h-4 bg-bgBlack text-goldenYellow"
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
              <td className="text-center font-poppins text-sm sm:text-lg font-bold lg:text-xl w-28">
                {`${meal.price * quantity} MAD`}
              </td>
            </tbody>
          </table>
        </div>
        <motion.p
          className="font-poppins text-bgBlack font-bold cursor-pointer hover:underline md:text-xl lg:ml-16"
          onClick={() => {
            dispatch(
              addToCart({
                id: meal.id,
                name: meal.title,
                price: meal.price,
                quantity: quantity,
              })
            ) && close();
          }}
          whileTap={{
            scale: 0.8,
          }}
        >
          Confirm
        </motion.p>
      </div>
    </ModalWindow>
  );
}

export default AddToCart;
