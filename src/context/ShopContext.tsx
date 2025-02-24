import { createContext, ReactNode, useState } from "react";
import all_product from "../components/assets/all_product";

export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  new_price: number;
  old_price: number;
}

interface ShopContextType {
  all_product: Product[];
  cartItems: any;
  addToCart: any;
  removeFromCart: any;
  getTotalAmount: any;
  getTotalCartItems: any
}

interface ShopContextProviderProps {
  children: ReactNode;
}

export const ShopContext = createContext<ShopContextType | null>(null);

const getDefaultCarts = () => {
  const carts: any = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    carts[index] = 0;
  }

  return carts;
};

const ShopContextProvider: React.FC<ShopContextProviderProps> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState(getDefaultCarts());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems, "called");
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += (itemInfo?.new_price || 0) * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem
  };

  const contextValue: ShopContextType = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalAmount,
    getTotalCartItems
  };

  console.log(getTotalAmount());

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
