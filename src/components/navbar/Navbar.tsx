import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="flex justify-around p-[16px] shadow-sm shadow-black">
      {/* Logo */}
      <div className="flex items-center gap-[10px]">
        <img src={logo} alt="logo" className="" />
        <p className="text-[#171717] text-[38px] font-semibold">SHOPPER</p>
      </div>
      {/* nav items */}
      <ul className="flex items-center gap-[50px] text-[#626262] text-[20px] font-medium">
        <li
          onClick={() => setMenu("shop")}
          className="flex flex-col items-center justify-center gap-[3px] cursor-pointer"
        >
          Shop{" "}
          {menu === "shop" ? (
            <hr className="bg-[#ff4141] h-[3px] border-none w-[80%] rounded-[10px]" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => setMenu("mens")}
          className="flex flex-col items-center justify-center gap-[3px] cursor-pointer"
        >
          Men
          {menu === "mens" ? (
            <hr className="bg-[#ff4141] h-[3px] border-none w-[80%] rounded-[10px]" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => setMenu("womens")}
          className="flex flex-col items-center justify-center gap-[3px] cursor-pointer"
        >
          Women
          {menu === "womens" ? (
            <hr className="bg-[#ff4141] h-[3px] border-none w-[80%] rounded-[10px]" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => setMenu("kids")}
          className="flex flex-col items-center justify-center gap-[3px] cursor-pointer"
        >
          Kids
          {menu === "kids" ? (
            <hr className="bg-[#ff4141] h-[3px] border-none w-[80%] rounded-[10px]" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      {/* log in */}
      <div className="flex items-center gap-[45px]">
        <button className="w-[157px] h-[58px] outline-none border border-[#7a7a7a] rounded-[75px] text-[#515151] text-[20px] font-medium bg-white cursor-pointer active:bg-[#f5f5f5]">
          Login
        </button>
        <img src={cart_icon} alt="" />
        <div className="w-[22px] h-[22px] flex items-center justify-center -mt-[35px] -ml-[55px] rounded-[11px] text-[14px] bg-red-500 text-white">
          0
        </div>
      </div>
    </div>
  );
};

export default Navbar;
