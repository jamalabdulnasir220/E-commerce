import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { useContext, useState } from "react";
import { Link } from "react-router";
import { ShopContext } from "../../context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="font-poppins flex justify-around p-[16px] shadow-xs shadow-black max-xl:py-[12px] max-xl:px-[50px] max-lg:py-[12px] max-lg:px-[30px]">
      {/* Logo */}
      <div className="flex items-center gap-[10px]">
        <img src={logo} alt="logo" className="max-xl:w-[40px]" />
        <p className="text-[#171717] text-[38px] font-semibold max-xl:text-[25px]">
          SHOPPER
        </p>
      </div>
      {/* nav items */}
      <ul className="flex items-center gap-[50px] text-[#626262] text-[20px] font-medium max-xl:gap-[30px] max-xl:text-base max-lg:gap-[25px] max-lg:text-[14px]">
        <li
          onClick={() => setMenu("shop")}
          className="flex flex-col items-center justify-center gap-[3px] cursor-pointer"
        >
          <Link to={"/"}>Shop </Link>
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
          <Link to={"/men"}>Men </Link>
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
          <Link to={"/women"}>Women </Link>
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
          <Link to={"/kids"}>Kids </Link>
          {menu === "kids" ? (
            <hr className="bg-[#ff4141] h-[3px] border-none w-[80%] rounded-[10px]" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      {/* log in */}
      <div className="flex items-center gap-[45px] max-xl:gap-[30px]">
        <Link to={"/login"}>
          {" "}
          <button className="w-[157px] h-[58px] outline-hidden border border-[#7a7a7a] rounded-[75px] text-[#515151] text-[20px] font-medium bg-white cursor-pointer active:bg-[#f5f5f5] max-xl:w-[120px] max-xl:h-[45px] max-xl:text-base max-lg:w-[80px] max-lg:h-[35px] max-lg:text-[14px]">
            Login
          </button>
        </Link>
        <Link to={"/cart"}>
          <img src={cart_icon} alt="cart" className="max-lg:w-[30px]"/>
        </Link>
        <div className="w-[22px] h-[22px] flex items-center justify-center -mt-[35px] -ml-[55px] rounded-[11px] text-[14px] bg-red-500 text-white max-xl:-ml-[40px] max-xl:text-[12px] max-lg:w-[18px] max-lg:h-[18px]">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
