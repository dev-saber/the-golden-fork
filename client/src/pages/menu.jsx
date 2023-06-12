import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMenu } from "../redux/slices/menuSlice";
import { motion } from "framer-motion";

import LoadingSpin from "../components/loadingSpin";
import Title from "../components/title";
import Meal from "../layouts/menu/meal";
import BackArrow from "../components/backArrow";
import AddToCart from "../layouts/menu/addToCart";
import ModalWindow from "../components/modalWindow";
import CartTable from "../components/cartTable";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const data = useSelector((state) => state.menu.menu);
  const loading = useSelector((state) => state.menu.loading);

  const [modal, setModal] = useState(false);
  const [cart, setCart] = useState(false);

  const order = useSelector((state) => state.cart.cart);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    // make the up scroll after the data fetching
    window.scrollTo(0, 0);

    !data.length && dispatch(fetchMenu());
  }, []);

  useEffect(() => {
    const newTotal = order.reduce((acc, meal) => {
      return acc + meal.price * meal.quantity;
    }, 0);
    setTotal(newTotal);
  }, [order]);

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
                  id={meal.stripe_id}
                  title={meal.meal_name}
                  price={meal.meal_price}
                  image={meal.image_path}
                  key={meal.stripe_id}
                  open={() => setModal(true)}
                />
              );
            })}
          </div>
          <div className="flex flex-col items-start gap-8 w-3/5 lg:flex-row lg:w-full lg:gap-28">
            {category.meals.slice(2).map((meal) => {
              return (
                <Meal
                  id={meal.stripe_id}
                  title={meal.meal_name}
                  price={meal.meal_price}
                  image={meal.image_path}
                  key={meal.stripe_id}
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
        <LoadingSpin />
      ) : (
        <>
          <BackArrow />
          <div
            className="absolute right-4 -mt-10 md:right-24 md:mt-4"
            onClick={() => setCart(true)}
          >
            <motion.img
              src="/images/cart.svg"
              className="w-3/5 md:w-[32px] cursor-pointer"
              alt="cart"
              whileTap={{
                scale: 0.8,
              }}
            />
          </div>
          {cart && (
            <ModalWindow open={cart} close={() => setCart(false)} bg="bgBlack">
              {!order.length ? (
                <div className="text-goldenYellow text-center">
                  Your cart is empty
                </div>
              ) : (
                <div className="max-h-96 overflow-y-auto">
                  <CartTable
                    action={() => navigate("/order")}
                    order={order}
                    total={total}
                    actionText="Go to Checkout"
                  />
                </div>
              )}
            </ModalWindow>
          )}

          {content}
        </>
      )}
      {modal && <AddToCart open={modal} close={() => setModal(false)} />}
    </div>
  );
}
