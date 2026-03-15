import { useShop } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import Title from "./Title";

function BestSeller() {
  const { productData } = useShop();
  const bestSellerProducts = productData
    .filter((product) => product.bestSeller)
    .slice(0, 5);
  return (
    <div className="my-20">
      <div className="text-center py-8 text-3xl">
        <Title title="BEST" subTitle="SELLER" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 mb-6.5">
          Our best sellers of medicines and health care products. Discover the
          best sellers in medicine and health care products.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 sm:gap-4 md:gap-6 lg:gap-8">
          {bestSellerProducts.map((product) => (
            <ProductItem product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
