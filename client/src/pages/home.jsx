import React from "react";
import Landing from "../layouts/landing";
import About from "../layouts/about";
import Menu from "../layouts/menu";
import Purchase from "../layouts/purchase";
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
