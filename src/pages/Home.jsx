import React, { useEffect, useState } from "react";
import Discover from "./Discover";
import Swap from "./Swap";
import Liquidity from "./Liquidity";
import About from "./About";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  const [activeMenu, setActiveMenu] = useState("Discover");
  const renderComponent = () => {
    switch (activeMenu) {
      case "Swap":
        return <Swap />;
      case "Liquidity":
        return <Liquidity />;
      case "Discover":
        return <Discover />;
      case "About":
        return <About />;
      default:
        return <Discover />;
    }
  };

  return (
    <div >
      <div className="bg-black text-white ">
        <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <div>{renderComponent()}</div>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
