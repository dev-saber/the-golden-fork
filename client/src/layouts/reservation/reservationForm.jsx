import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { reserve } from "../../api/reserve.js";
import LoadingSpin from "../../components/loadingSpin.jsx";
import ModalWindow from "../../components/modalWindow.jsx";

export default function ReservationForm() {
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  // after sending the verification email, the customer is redirected to the home page
  const handleModalClosing = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 300);
  };

  const reservation = useFormik({
    initialValues: {
      name: "",
      email: "",
      reservation_date: "",
      reservation_time: "",
      number_of_people: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(25, "Only 25 caracters are allowed")
        .min(8, "Enter at least 8 characters")
        .required("Required"),

      email: Yup.string()
        .email("Pease enter a valid email address")
        .required("Required"),

      reservation_date: Yup.date().required(),

      reservation_time: Yup.string().test("valid-time", (value) => {
        // Regular expression to validate time in HH:MM format
        const timeRegex = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
        return timeRegex.test(value);
      }),

      number_of_people: Yup.number()
        .max(12, "12 people is the max for each reservation")
        .moreThan(0, "Please enter a valid number"),
    }),
    onSubmit: (values) => {
      setLoading(true);
      reserve(values)
        .then((response) => {
          setResponseMessage(response);
          setShowModal(true);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        });
    },
  });

  return (
    <div className="flex justify-center items-start">
      <form
        method="post"
        className="flex flex-col items-start gap-16 w-5/6"
        onSubmit={reservation.handleSubmit}
      >
        <div className=" flex flex-col items-start gap-4">
          <label
            htmlFor="name"
            className="font-yellowtail text-goldenYellow md:text-2xl"
          >
            Enter Your Full Name
          </label>
          <div className="flex flex-col items-start gap-2">
            <input
              type="text"
              name="name"
              value={reservation.values.name}
              onChange={reservation.handleChange}
              onBlur={reservation.handleBlur}
              className="bg-black bg-opacity-50 border-goldenYellow border-2 text-white px-4 py-2 pr-20"
            />
            {reservation.touched.name && reservation.errors.name && (
              <p className="text-red-700 font-semibold text-center">
                {reservation.errors.name}
              </p>
            )}
          </div>
        </div>

        <div className=" flex flex-col items-start gap-4">
          <label
            htmlFor="email"
            className="font-yellowtail text-goldenYellow md:text-2xl"
          >
            Enter Your Email
          </label>
          <div className="flex flex-col items-start gap-2">
            <input
              name="email"
              type="email"
              value={reservation.values.email}
              onChange={reservation.handleChange}
              onBlur={reservation.handleBlur}
              className="bg-black bg-opacity-50 border-goldenYellow border-2 text-white px-4 py-2 pr-20"
            />
            {reservation.touched.email && reservation.errors.email && (
              <p className="text-red-700 font-semibold text-center">
                {reservation.errors.email}
              </p>
            )}
          </div>
        </div>

        <div className=" flex flex-col items-start gap-4">
          <label
            htmlFor="date"
            className="font-yellowtail text-goldenYellow md:text-2xl"
          >
            Select Your Reservation Time
          </label>
          <div className="flex flex-col items-start gap-2">
            <div className="flex border-goldenYellow border-2">
              <input
                type="date"
                name="reservation_date"
                min={new Date().toISOString().split("T")[0]} // Set min attribute to today's date
                value={reservation.values.reservation_date}
                onChange={reservation.handleChange}
                onBlur={reservation.handleBlur}
                className="picker bg-black bg-opacity-50 text-white px-4 py-2"
              />
              <input
                type="time"
                name="reservation_time"
                value={reservation.values.reservation_time}
                onChange={reservation.handleChange}
                onBlur={reservation.handleBlur}
                className="picker bg-black bg-opacity-50 text-white px-4 py-2"
              />
            </div>
            {(reservation.touched.reservation_date ||
              reservation.touched.reservation_time) &&
              (reservation.errors.reservation_date ||
                reservation.errors.reservation_time) && (
                <p className="text-red-700 font-semibold">
                  Please enter a valid date and time format
                </p>
              )}
          </div>
        </div>

        <div className="flex flex-col items-start gap-4">
          <label
            htmlFor="number_of_people"
            className="font-yellowtail text-goldenYellow md:text-2xl"
          >
            Number Of People
          </label>
          <input
            type="number"
            name="number_of_people"
            value={reservation.values.number_of_people}
            onChange={reservation.handleChange}
            onBlur={reservation.handleBlur}
            className="number-input appearance-none bg-black bg-opacity-50 border-goldenYellow border-2 py-2 px-4 text-white pr-20"
          />
          {reservation.touched.number_of_people &&
            reservation.errors.number_of_people && (
              <p className="text-red-700 font-semibold text-center">
                {reservation.errors.number_of_people}
              </p>
            )}
        </div>

        <motion.button
          className="self-center font-poppins text-goldenYellow font-bold cursor-pointer hover:underline md:text-xl lg:ml-16"
          type="submit"
          whileTap={{
            scale: 0.8,
          }}
        >
          Confirm My Reservation
        </motion.button>
      </form>

      {/* While the request is being sent through the api service function, a bg overlay + a loading spin will apear */}
      <div
        className={`${
          loading ? "fixed inset-0 bg-black opacity-50" : "hidden"
        }`}
      ></div>
      {loading && <LoadingSpin />}

      {/* Once the api call succeed and the message is returned, a modal window is shown */}
      <ModalWindow
        open={showModal}
        close={() => {
          setShowModal(false);
          handleModalClosing();
        }}
      >
        <p className="font-poppins text-center">{responseMessage}</p>
      </ModalWindow>
    </div>
  );
}
