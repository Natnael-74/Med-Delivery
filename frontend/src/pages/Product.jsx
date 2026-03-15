import { useParams } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { useState } from "react";
import { BiSolidStar } from "react-icons/bi";
import RelatedProducts from "../components/RelatedProducts";

function Product() {
  const [coverImage, setCoverImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const { productId } = useParams();
  const { productData, currency } = useShop();

  const product = productData.find((product) => product._id === productId);
  if (product === undefined) {
    return (
      <div>
        <p className="text-2xl text-gray-500">No product found</p>
      </div>
    );
  }

  return (
    <div className="border-t-2 pt-10 transition-all duration-500 ease-in opacity-100 ">
      <div className="flex flex-col gap-12 sm:gap-12 sm:flex-row">
        {/* {product.images} */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {product.images.map((image, index) => (
              <img
                onClick={() => setCoverImage(image)}
                key={index}
                src={image}
                alt="product"
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img
              src={coverImage || product.images[0]}
              alt="product"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="flex-1 ">
          <h1 className="text-2xl font-medium mt-2">{product.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <BiSolidStar className="text-yellow-400 w-5 " />
            <BiSolidStar className="text-yellow-400 w-5" />
            <BiSolidStar className="text-yellow-400 w-5" />
            <BiSolidStar className="text-yellow-400 w-5" />
            <BiSolidStar className="text-yellow-400 w-5" />
            <p className="text-gray-500 pl-2">(5.0)</p>
          </div>
          <p className="font-medium mt-5 text-3xl">
            {currency}
            {product.price}
          </p>
          <p className="text-gray-500 mt-5 w-4/5">{product.description}</p>
          <div className="flex flex-col  gap-4 my-8">
            <p>Select Sizes</p>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  onClick={() => setSelectedSize(size)}
                  disabled={size === ""}
                  key={size}
                  className={`border border-gray-500 bg-gray-100  py-2 px-4 cursor-pointer hover:bg-gray-200 transition-all duration-300 ease-in-out ${size === selectedSize ? "bg-gray-300" : ""}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <button
            className="bg-black text-sm  text-white py-3 px-8 hover:bg-gray-800 active:bg-gray-700 transition-all duration-300 ease-in-out"
            disabled={selectedSize === ""}
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-[4/5]" />
          <div className="flex flex-col gap-1 mt-5 text-sm text-gray-500 ">
            <p>100% Original Products</p>
            <p>Cash on Delivery Available for this product</p>
            <p>Easy return and exchange policy available in 7 days</p>
          </div>
        </div>
      </div>

      {/* description */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews(5.0)</p>
        </div>
        <div className="flex flex-col gap-4 border py-6 text-sm text-gray-500 ">
          <p>
            An e-commerce platform is a platform that enables online shopping.
            It allows users to buy and sell products and services online.
          </p>
          <p>
            Each product is listed with a title, description, price, and image.
            The user can add the product to their cart and proceed to checkout.
          </p>
        </div>
      </div>
      {/* related products */}
      <RelatedProducts
        category={product.gender}
        subCategory={product.ageCategory}
      />
    </div>
  );
}

export default Product;
