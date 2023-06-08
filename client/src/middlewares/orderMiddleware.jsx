import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function OrderMiddleware({ children }) {
  const order = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();

  useEffect(() => {
    if (!order.length) {
      navigate("/");
    }
  }, [order]);

  return <>{children}</>;
}

export default OrderMiddleware;
