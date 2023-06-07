import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { reserve } from "../../api/reserve.js";
import LoadingSpin from "../../components/loadingSpin.jsx";
import ModalWindow from "../../components/modalWindow.jsx";

export default function ReservationForm() {
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const reservation = useFormik({
    initialValues: {
      name: "",
      email: "",
      reservation_date: "",
      reservation_time: "",
      number_of_people: 0,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Only 15 caracters are allowed")
        .min(8, "Enter at least 8 characters")
        .required("Required"),

      email: Yup.string()
        .email("Pease enter a valid email address")
        .required("Required"),

      reservation_date: Yup.date().required("Please enter a valid date"),

      reservation_time: Yup.string().test(
        "valid-time",
        "Please enter a valid time format",
        (value) => {
          // Regular expression to validate time in HH:MM format
          const timeRegex = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
          return timeRegex.test(value);
        }
      ),

      number_of_people: Yup.number()
        .max(12, "12 people is the max for each reservation")
        .moreThan(0, "Please enter a valid number"),
    }),
    // onSubmit: (values) => console.log(values),
    // onSubmit: values => reserve(values),
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
    <>
      <form
        action="#"
        method="post"
        className="flex flex-col items-center"
        onSubmit={reservation.handleSubmit}
      >
        <input
          name="name"
          type="text"
          value={reservation.values.name}
          onChange={reservation.handleChange}
          onBlur={reservation.handleBlur}
        />
        {reservation.touched.name && reservation.errors.name && (
          <p className="text-red-700">{reservation.errors.name}</p>
        )}

        <input
          name="email"
          type="email"
          value={reservation.values.email}
          onChange={reservation.handleChange}
          onBlur={reservation.handleBlur}
        />
        {reservation.touched.email && reservation.errors.email && (
          <p className="text-red-700">{reservation.errors.email}</p>
        )}

        <div className="flex flex-col items-center">
          <div className="flex">
            <input
              type="date"
              name="reservation_date"
              value={reservation.values.reservation_date}
              onChange={reservation.handleChange}
              onBlur={reservation.handleBlur}
            />
            <input
              type="time"
              name="reservation_time"
              value={reservation.values.reservation_time}
              onChange={reservation.handleChange}
              onBlur={reservation.handleBlur}
            />
          </div>
          {(reservation.touched.reservation_date ||
            reservation.touched.reservation_time) &&
            (reservation.errors.reservation_date ||
              reservation.errors.reservation_time) && (
              <p className="text-red-700">
                Please enter a valid date and time format
              </p>
            )}
        </div>
        <input
          type="number"
          name="number_of_people"
          value={reservation.values.number_of_people}
          onChange={reservation.handleChange}
          onBlur={reservation.handleBlur}
        />
        {reservation.touched.number_of_people &&
          reservation.errors.number_of_people && (
            <p className="text-red-700">
              {reservation.errors.number_of_people}
            </p>
          )}
        <button className="text-white" type="submit">
          Confirm My Reservation
        </button>
      </form>

      {/* While the request is being sent through the api service function, a bg overlay + a loading spin will apear */}
      <div
        className={`${
          loading ? "fixed inset-0 bg-black opacity-50" : "hidden"
        }`}
      ></div>
      {loading && <LoadingSpin />}

      {/* Once the api call succeed and the message is returned, a modal window is shown */}
      <ModalWindow open={showModal} close={() => setShowModal(false)}>
        <p className="font-poppins text-center">{responseMessage}</p>
      </ModalWindow>
    </>
  );
}
