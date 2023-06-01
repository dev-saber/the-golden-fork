import React from "react";
import Landing from "../layouts/home/landing";
import About from "../layouts/home/about";
import Menu from "../layouts/home/menu";
import Purchase from "../layouts/home/purchase";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Landing />
      <div className="bg-bgBlack gap-24 flex flex-col md:gap-32">
        <About />
        <Menu />
        <Purchase />
        <Footer />
      </div>
    </>
  );
}
