import { Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Menu from "../pages/menu";
import NotFound from "../pages/notFound";
import Reservation from "../pages/reservation";
import Order from "../pages/order";
import OrderMiddleware from "../middlewares/orderMiddleware";
import Success from "../pages/success";
import Cancel from "../pages/cancel";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route
        path="/order"
        element={
          <OrderMiddleware>
            <Order />
          </OrderMiddleware>
        }
      />
      <Route path="/success" element={<Success />} />
      <Route path="/cancel" element={<Cancel />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
