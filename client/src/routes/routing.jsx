import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Menu from "../pages/menu";
import NotFound from "../pages/notFound";
import Reservation from "../pages/reservation";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
