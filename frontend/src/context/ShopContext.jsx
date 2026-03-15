import { createContext, use, useContext, useEffect, useState } from "react";
import products from "../assets/asset";
import { toast } from "react-toastify";

const ShopContext = createContext();

function ShopProvider({ children }) {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cart, setCart] = useState({});

  const currency = "$";
  const deliveryFee = 10;
  const productData = products;

  function addToCart(productId, size) {
    if (size === "") {
      toast.error("Please select a size");
      return;
    }

    const cartData = structuredClone(cart);
    if (cartData[productId]) {
      if (cartData[productId][size]) {
        cartData[productId][size] += 1;
      } else {
        cartData[productId][size] = 1;
      }
    } else {
      cartData[productId] = {};
      cartData[productId][size] = 1;
    }
    setCart(cartData);
    toast.success("Product added to cart");
  }

  function getCartCount() {
    let count = 0;
    for (const items in cart) {
      for (const item in cart[items]) {
        try {
          if (cart[items][item] > 0) {
            count += cart[items][item];
          }
        } catch (e) {
          console.log(e);
        }
      }
    }
    return count;
  }

  return (
    <ShopContext.Provider
      value={{
        productData,
        currency,
        deliveryFee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cart,
        addToCart,
        getCartCount,
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
