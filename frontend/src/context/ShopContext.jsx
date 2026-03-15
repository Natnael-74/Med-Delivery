import { createContext, useContext, useState } from "react";
import products from "../assets/asset";

const ShopContext = createContext();

function ShopProvider({ children }) {
  const [serach, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const currency = "$";
  const deliveryFee = 10;
  const productData = products;

  return (
    <ShopContext.Provider
      value={{
        productData,
        currency,
        deliveryFee,
        serach,
        setSearch,
        showSearch,
        setShowSearch,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

function useShop() {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
}

export { ShopProvider, useShop };
