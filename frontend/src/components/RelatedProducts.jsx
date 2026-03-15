import { useShop } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import Title from "./Title";

function RelatedProducts({ category, subCategory }) {
  const { productData } = useShop();
  const relatedProducts =
    productData?.length > 0 &&
    productData
      ?.filter((product) => {
        return (
          product.category === category || product.subCategory === subCategory
        );
      })
      .slice(0, 5);

  return (
    <div className="mt-24">
      <div className="text-center text-3xl py-2">
        <Title title="RELATED" subTitle="PRODUCTS" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {relatedProducts.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
