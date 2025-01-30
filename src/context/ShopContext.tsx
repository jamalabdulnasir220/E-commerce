import { createContext, ReactNode } from "react";
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
}

interface ShopContextProviderProps {
  children: ReactNode;
}

export const ShopContext = createContext<ShopContextType | null>(null);

const ShopContextProvider: React.FC<ShopContextProviderProps> = ({
  children,
}) => {
  const contextValue: ShopContextType =  {all_product} ;

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
