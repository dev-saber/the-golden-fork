import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { paymentCheckout } from "../../api/paymentCheckout";
import LoadingSpin from "../../components/loadingSpin";

export default function OrderForm({ prev, formValues, setFormValues, total }) {
  const [loading, setLoading] = useState(false);

  const orderDetails = {
    mealsInfo: useSelector((state) => state.cart.cart),
    amount: total,
  };

  const order = useFormik({
    initialValues: formValues,
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Only 25 caracters are allowed")
        .min(8, "Enter at least 8 characters")
        .required("Required"),

      address: Yup.string().required("Required"),

      delivery_time: Yup.string().test(
        "valid-time",
        "Please enter a valid time format",
        (value) => {
          // Regular expression to validate time in HH:MM format
          const timeRegex = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
          return timeRegex.test(value);
        }
      ),
    }),
    onSubmit: (values) => {
      const userInfo = values;
      paymentCheckout(userInfo, orderDetails);
      setLoading(true);
    },
  });

  const handlePrev = () => {
    setFormValues(order.values);
    prev();
  };

  return (
    <div className="flex justify-center items-start">
      <form
        className="flex flex-col items-start gap-16"
        onSubmit={order.handleSubmit}
      >
        <div className=" flex flex-col items-start gap-4">
          <label htmlFor="name" className="font-yellowtail text-goldenYellow">
            Enter Your Full Name
          </label>
          <div className="flex flex-col items-start gap-2">
            <input
              name="name"
              type="text"
              value={order.values.name}
              onChange={order.handleChange}
              onBlur={order.handleBlur}
              className="bg-black bg-opacity-50 border-goldenYellow border-2 text-white px-4 py-2"
            />
            {order.touched.name && order.errors.name && (
              <p className="text-red-700 font-semibold text-center">
                {order.errors.name}
              </p>
            )}
          </div>
        </div>

        <div className=" flex flex-col items-start gap-4">
          <label
            htmlFor="address"
            className="font-yellowtail text-goldenYellow"
          >
            Enter Your Local Address
          </label>
          <div className="flex flex-col items-start gap-2">
            <input
              name="address"
              type="text"
              value={order.values.address}
              onChange={order.handleChange}
              onBlur={order.handleBlur}
              className="bg-black bg-opacity-50 border-goldenYellow border-2 text-white px-4 py-2"
            />
            {order.touched.address && order.errors.address && (
              <p className="text-red-700 font-semibold text-center">
                {order.errors.address}
              </p>
            )}
          </div>
        </div>

        <div className=" flex flex-col items-start gap-4">
          <label
            htmlFor="delivery_time"
            className="font-yellowtail text-goldenYellow"
          >
            Enter Your Email
          </label>
          <div className="flex flex-col items-start gap-2">
            <input
              type="time"
              name="delivery_time"
              value={order.values.delivery_time}
              onChange={order.handleChange}
              onBlur={order.handleBlur}
              className="picker border-goldenYellow border-2 bg-black bg-opacity-50 text-white px-4 py-2"
            />

            {order.touched.delivery_time && order.errors.delivery_time && (
              <p className="text-red-700 font-semibold">
                {order.errors.delivery_time}
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-8">
          <motion.p
            whileTap={{
              scale: 0.8,
            }}
            className="font-poppins text-goldenYellow font-bold cursor-pointer hover:underline md:text-xl lg:ml-16"
            onClick={handlePrev}
          >
            Go Back
          </motion.p>

          <motion.button
            whileTap={{
              scale: 0.8,
            }}
            type="submit"
            className="font-poppins text-goldenYellow font-bold cursor-pointer hover:underline md:text-xl lg:ml-16"
          >
            Checkout
          </motion.button>
        </div>
      </form>
      <div
        className={`${
          loading ? "fixed inset-0 bg-black opacity-50" : "hidden"
        }`}
      ></div>
      {loading && <LoadingSpin />}
    </div>
  );
}
