import { Routes, Route } from "react-router-dom";
import Home from "../pages/home"
import Menu from "../pages/menu";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/menu" element={<Menu />}/>
    </Routes>
  );
}
