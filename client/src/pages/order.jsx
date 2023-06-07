import React from "react";
import BackArrow from "../components/backArrow";
import { motion } from "framer-motion";

function Order() {
  return (
    <div className="bg-bgBlack w-full h-screen pt-20 gap-24 flex flex-col md:gap-32 items-center pb-8">
      <BackArrow />
      <p className="glow font-bold text-xl px-8 text-center font-yellowtail md:text-4xl sm:w-1/2 md:w-[70%] lg:text-5xl lg:w-[65%]">
        Place your food order online from the confort of your own house
      </p>
      <div className="relative overflow-x-auto">
        <table className="border-2 border-goldenYellow text-sm text-left sm:rounded-lg">
          <thead className="text-lg text-center font-yellowtail text-goldenYellow">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-y border-goldenYellow">
              <td className="px-6 py-4 font-semibold text-white">
                Apple Watch ihn oihoihfe oihlkn
              </td>
              <td className="text-center text-white">123 MAD</td>
              <td className="px-6 py-4">
                <div className="flex items-center space-x-3">
                  <button
                    className="inline-flex items-center p-1 text-sm font-medium bg-goldenYellow border rounded-full focus:outline-none border-goldenYellow"
                    type="button"
                    // onClick={() => {
                    //   if (quantity === 1) {
                    //     // prevent the customer of giving a null or a negative value
                    //     return;
                    //   } else {
                    //     setQuantity((prev) => prev - 1);
                    //   }
                    // }}
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
                      //   value={quantity}
                    />
                  </div>

                  <button
                    className="inline-flex items-center p-1 text-sm font-medium bg-goldenYellow border rounded-full focus:outline-none border-goldenYellow"
                    type="button"
                    // onClick={() => setQuantity((prev) => prev + 1)}
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
              <td className="px-6 py-4 font-semibold text-white">$599</td>
              <td className="px-6 py-4 text-goldenYellow font-semibold hover:underline cursor-pointer">
                <motion.p
                  whileTap={{
                    scale: 0.8,
                  }}
                >
                  Remove
                </motion.p>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="font-semibold text-white">
              <th scope="row" className="px-6 py-3 text-base col-span-2">
                Total
              </th>
              <td className="px-6 py-3"></td>
              <td className="px-6 py-3">21,000</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Order;
