import React from "react";
import ReactDom from "react-dom";

function ModalWindow({ open, close, children, bg }) {
  !open && null;

  let modalBg;
  bg === undefined ? (modalBg = "bg-goldenYellow") : (modalBg = `bg-${bg}`);

  return ReactDom.createPortal(
    <>
      <div
        className={`${open ? "fixed inset-0 bg-black opacity-50" : "hidden"}`}
      ></div>
      <div
        className={`${
          open ? "fixed inset-0 flex items-center justify-center" : "hidden"
        }`}
      >
        <div
          className={`${modalBg} relative rounded-lg w-[90%] p-8 lg:w-1/2 lg:text-xl`}
        >
          {children}
          <div
            className={`absolute right-5 top-3 text-xl cursor-pointer ${
              bg && "text-goldenYellow"
            }`}
            onClick={close}
          >
            &times;
          </div>
        </div>
      </div>
    </>,
    document.querySelector("#portal")
  );
}

export default ModalWindow;
