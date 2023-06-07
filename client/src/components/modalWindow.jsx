import React from "react";
import ReactDom from "react-dom";

function ModalWindow({ open, close, children }) {
  !open && null;
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
        <div className="bg-goldenYellow relative rounded-lg w-[90%] p-8 lg:w-1/2 lg:text-xl">
          {children}
          <div
            className="absolute right-5 top-3 text-xl cursor-pointer"
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
