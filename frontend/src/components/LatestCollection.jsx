//import { useEffect, useState } from "react";
import { useShop } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

function LatestCollection() {
  // const [latestProducts, setLatestProducts] = useState([]);
  const { productData } = useShop();
  const latestProducts = productData.slice(0, 10);

  // useEffect(() => {
  //   const filteredProducts = productData.slice(0, 10);
  //   setLatestProducts(filteredProducts);
  // }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title title="LATEST" subTitle="COLLECTIONS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Our latest collections of medicines and health care products. Discover
          the latest innovations in medicine and health care products.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 sm:gap-4 md:gap-6 lg:gap-8">
        {latestProducts.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default LatestCollection;
