import React from "react";
import { useFormik } from "formik";
export default function ReservationForm() {
  const reservation = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      date: "",
      time: "",
      peopleNum: 0,
    },
  });
  return (
    <form action="#" method="get" className="flex flex-col items-center">
        <div className="flex flex-col items-start">
            <p className="font-yellowtail text-goldenYellow">Enter Your Full Name</p>
            <input type="text" className="" />
        </div>
        <div className="flex flex-col items-start">
            <p className="font-yellowtail text-goldenYellow">Enter Your Email Address</p>
            <input type="email" className="" />
        </div>
        <div className="flex">
        <div class="flex">
  <div class="flex-shrink-0">
    <img src="your_image_url" alt="Image" class="w-32 h-32"/>
  </div>
  <div class="relative">
    <select id="states-button" data-dropdown-toggle="dropdown-states" class="z-10 block w-full py-2.5 px-4 text-sm font-medium text-gray-500 bg-gray-100 border border-gray-300 rounded-r-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600">
      <option value="state1">State 1</option>
      <option value="state2">State 2</option>
      <option value="state3">State 3</option>
    </select>
  </div>
</div>

        <input type="text" className="" />
        <input type="text" className="" />
        </div>
    </form>
  )
}
