import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalAmount } =
    useContext(ShopContext);

  return (
    <div className="my-[100px] mx-[170px]">
      <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] py-[20px] px-0 text-[#454545] text-[18px] font-semibold">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-[3px] bg-[#e2e2e2] border-none" />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div className="">
              <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] py-[20px] px-0 text-[#454545] text-[17px] font-medium">
                <img src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="w-[64px] h-[50px] border-2 border-[#ebebeb] bg-[#fff]">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  onClick={() => removeFromCart(e.id)}
                  src={remove_icon}
                  alt=""
                  className="cursor-pointer"
                />
              </div>
              <hr className="h-[3px] bg-[#e2e2e2] border-none" />
            </div>
          );
        }
        return null;
      })}
      <div className="flex my-[100px] mx-0">
        <div className="flex flex-1 flex-col mr-[200px] gap-10">
          <h1>Cart Totals</h1>
          <div>
            <div className="flex justify-between py-[15px] px-0">
              <p>SubTotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between py-[15px] px-0">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between py-[15px] px-0">
              <h3>Total</h3>
              <p>${getTotalAmount()}</p>
            </div>
          </div>
          <button className="w-[262px] h-[58px] outline-none border-none bg-[#ff5a5a] text-[#fff] text-[16px] font-semibold cursor-pointer">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="flex-1 text-[16px] font-medium">
          <p className="text-[#555]">If you have a promo code, Enter it here</p>
          <div className="flex items-center w-[504px] mt-[15px] pl-[20px] h-[58px] bg-[#eaeaea]">
            <input
              className="border-none outline-none bg-transparent text-[16px] w-[330px] h-[50px]"
              type="text"
              placeholder="promo code"
            />
            <button className="w-[170px] h-[58px] text-base bg-black text-white cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
