import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function ReservationForm() {
  const reservation = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      date: "",
      time: "",
      peopleNum: 0,
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(15, "Only 15 caracters are allowed")
        .min(8, "Enter at least 8 characters")
        .required("Required"),

      email: Yup.string()
        .email("Pease enter a valid email address")
        .required("Required"),

      date: Yup.date().required("Please enter a valid date"),

      time: Yup.string().test(
        "valid-time",
        "Please enter a valid time format",
        (value) => {
          // Regular expression to validate time in HH:MM format
          const timeRegex = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
          return timeRegex.test(value);
        }
      ),

      peopleNum: Yup.number()
        .max(12, "12 people is the max for each reservation")
        .moreThan(0, "Please enter a valid number"),
    }),
    onSubmit: (values) => console.log(values),
  });

  return (
    <form
      action="#"
      method="get"
      className="flex flex-col items-center"
      onSubmit={reservation.handleSubmit}
    >
      <input
        name="fullName"
        type="text"
        value={reservation.values.fullName}
        onChange={reservation.handleChange}
        onBlur={reservation.handleBlur}
      />
      {reservation.touched.fullName && reservation.errors.fullName && (
        <p className="text-red-700">{reservation.errors.fullName}</p>
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
            name="date"
            value={reservation.values.date}
            onChange={reservation.handleChange}
            onBlur={reservation.handleBlur}
          />
          <input
            type="time"
            name="time"
            value={reservation.values.time}
            onChange={reservation.handleChange}
            onBlur={reservation.handleBlur}
          />
        </div>
        {(reservation.touched.date || reservation.touched.time) &&
          (reservation.errors.date || reservation.errors.time) && (
            <p className="text-red-700">
              Please enter a valid date and time format
            </p>
          )}
      </div>
      <input
        type="number"
        name="peopleNum"
        value={reservation.values.peopleNum}
        onChange={reservation.handleChange}
        onBlur={reservation.handleBlur}
      />
      {reservation.touched.peopleNum && reservation.errors.peopleNum && (
        <p className="text-red-700">{reservation.errors.peopleNum}</p>
      )}
      <button className="text-white">Confirm My Reservation</button>
    </form>
  );
}
