import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMenu } from "../redux/slices/menuSlice";
import { motion } from "framer-motion";

import LoadingSpinner from "../layouts/menu/loadingSpin";
import Title from "../components/title";
import Meal from "../layouts/menu/meal";
import BackArrow from "../components/backArrow";
import ModalWindow from "../components/modalWindow";

export default function Menu() {
  const data = useSelector((state) => state.menu.menu);
  const loading = useSelector((state) => state.menu.loading);

  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    // make the up scroll after the data fetching
    window.scrollTo(0, 0);

    !data.length && dispatch(fetchMenu());
  }, []);

  const content = data.map((category) => {
    return (
      <div
        className="flex flex-col items-center gap-16 lg:gap-24"
        key={category.id}
      >
        <Title text={category.title} />

        <div className="flex flex-col items-center gap-8 lg:gap-28 mx-auto w-5/6 lg:w-auto">
          <div className="flex flex-col items-start gap-8 w-3/5 lg:flex-row lg:w-full lg:gap-28">
            {category.meals.slice(0, 2).map((meal) => {
              return (
                <Meal
                  id={meal.id}
                  title={meal.meal_name}
                  price={meal.meal_price}
                  image={meal.image_path}
                  key={meal.id}
                  open={() => setModal(true)}
                />
              );
            })}
          </div>
          <div className="flex flex-col items-start gap-8 w-3/5 lg:flex-row lg:w-full lg:gap-28">
            {category.meals.slice(2).map((meal) => {
              return (
                <Meal
                  id={meal.id}
                  title={meal.meal_name}
                  price={meal.meal_price}
                  image={meal.image_path}
                  key={meal.id}
                  open={() => setModal(true)}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="bg-bgBlack w-full min-h-screen pt-20 gap-24 flex flex-col md:gap-32 text-white pb-8">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <BackArrow />
          {content}
        </>
      )}
      {modal && (
        <ModalWindow open={modal} close={() => setModal(false)}>
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
                      Roasted Red Pepper Hummus with Pita Chips
                    </p>
                    <p className="font-poppins text-sm sm:text-lg font-bold lg:text-xl">
                      123 MAD
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <button
                        className="inline-flex items-center p-1 text-sm font-medium bg-bgBlack border rounded-full focus:outline-none border-bgBlack"
                        type="button"
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
                          id="first_product"
                          className="bg-bgBlack text-goldenYellow w-14 border border-gray-800 text-sm rounded-lg block px-2.5 py-1 placeholder-goldenYellow text-center"
                          placeholder="1"
                          required
                        />
                      </div>

                      <button
                        className="inline-flex items-center p-1 text-sm font-medium bg-bgBlack border rounded-full focus:outline-none border-bgBlack"
                        type="button"
                        onClick={() => {}}
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
                </tbody>
              </table>
            </div>
            <motion.p
              className="font-poppins text-bgBlack font-bold cursor-pointer hover:underline md:text-xl lg:ml-16"
              onClick={() => setModal(false)}
              whileTap={{
                scale: 0.8,
              }}
            >
              Confirm
            </motion.p>
          </div>
        </ModalWindow>
      )}
    </div>
  );
}
