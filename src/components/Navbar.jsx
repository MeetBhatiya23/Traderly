import React, { useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";

function Navbar({ activeMenu, setActiveMenu }) {
  const setMenu = (menu) => {
    return setActiveMenu(menu);
  };

  return (
    <>
      <div className="bg-gray-900 flex justify-between px-20">
        <div>
          <img className="w-48" src="public\logo.png" alt="" />
        </div>
        <div className="text-white text-sm flex items-center px-6">
          <ul className="flex font-semibold items-center">
            <li
              onClick={() => setMenu("Swap")}
              className={`${
                activeMenu === "Swap"
                  ? "gradiant-button text-black rounded-lg  px-10 py-3 cursor-pointer"
                  : " bg-black rounded-l-lg px-10 py-3 cursor-pointer"
              }`}
            >
              Swap
            </li>
            <li
              onClick={() => setMenu("Liquidity")}
              className={`${
                activeMenu === "Liquidity"
                  ? "gradiant-button text-black rounded-lg  px-10 py-3 cursor-pointer"
                  : " bg-black px-10 py-3 cursor-pointer"
              }`}
            >
              Liquidity
            </li>
            <li
              onClick={() => setMenu("Discover")}
              className={`${
                activeMenu === "Discover"
                  ? "gradiant-button text-black rounded-lg  px-10 py-3 cursor-pointer"
                  : " bg-black px-10 py-3 cursor-pointer"
              }`}
            >
              Discover
            </li>
            <li
              onClick={() => setMenu("About")}
              className={`${
                activeMenu === "About"
                  ? "gradiant-button text-black rounded-lg  px-10 py-3 cursor-pointer"
                  : " bg-black rounded-r-lg px-10 py-3 cursor-pointer"
              }`}
            >
              About
            </li>
          </ul>
        </div>
        <div className="flex gap-6 items-center">
          <div className="bg-black flex justify-center items-center gap-2 px-3 py-2 rounded-lg cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6001/6001368.png"
              className="w-7"
            />
            <div className="flex items-center gap-2 justify-center">
              <div className="text-sm">Ethereum</div>
              <TiArrowSortedDown />        
            </div>
          </div>
          <div className="gradiant-button text-black rounded-lg font-semibold px-5 py-3 cursor-pointer">
            CONNECT WALLET
          </div>

          <IoIosNotifications className="text-3xl" />

          <img src="uk-flag.png" alt="" className="w-12  cursor-pointer" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
