import { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

import { useShop } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

function Collection() {
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavant");

  const { productData, search, showSearch } = useShop();

  function toggleCategory(e) {
    const value = e.target.value;
    if (category.includes(value)) {
      setCategory(category.filter((c) => c !== value));
    } else {
      setCategory([...category, value]);
    }
  }

  function toggleSubCategory(e) {
    const value = e.target.value;
    if (subCategory.includes(value)) {
      setSubCategory(subCategory.filter((c) => c !== value));
    } else {
      setSubCategory([...subCategory, value]);
    }
  }

  useEffect(() => {
    let products = [...productData];

    // Apply search filter
    if (showSearch && search) {
      products = products.filter((product) =>
        product.name?.toLowerCase()?.includes(search?.toLowerCase()),
      );
    }

    // Apply category filter (gender)
    if (category.length > 0) {
      products = products.filter((product) =>
        category.includes(product.gender),
      );
    }

    // Apply subCategory filter (ageCategory)
    if (subCategory.length > 0) {
      products = products.filter((product) =>
        subCategory.includes(product.ageCategory),
      );
    }

    // Apply sorting
    if (sortType === "low-high") {
      products.sort((a, b) => a.price - b.price);
    } else if (sortType === "high-low") {
      products.sort((a, b) => b.price - a.price);
    }

    setFilterProducts(products);
  }, [category, subCategory, search, showSearch, sortType, productData]);

  return (
    <div className="flex flex-col sm:flex-row gap-10 sm:gap:10 pt-10 border-t">
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter((show) => !show)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <RiArrowDropDownLine
            className={`h-16 sm:hidden ${showFilter ? "rotate-180" : ""}`}
          />
        </p>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}
          onClick={() => setShowFilter(!showFilter)}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="cursor-pointer w-3"
                value={"men"}
                onChange={toggleCategory}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="cursor-pointer w-3"
                value={"women"}
                onChange={toggleCategory}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="cursor-pointer w-3 bg-gray-500"
                value={"unisex"}
                onChange={toggleCategory}
              />
              Unisex
            </p>
          </div>
        </div>

        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : "hidden"} sm:block`}
          onClick={() => setShowFilter(!showFilter)}
        >
          <p className="mb-3 text-sm font-medium">Type</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="cursor-pointer w-3"
                value={"kids"}
                onChange={toggleSubCategory}
              />
              Kids
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="cursor-pointer w-3"
                value={"adults"}
                onChange={toggleSubCategory}
              />
              Adults
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="cursor-pointer w-3 bg-gray-500"
                value={"older"}
                onChange={toggleSubCategory}
              />
              Older
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between text-base sm:text-2xl mb-4">
          <Title title="ALL" subTitle="COLLECTIONS" />
          <select
            className="text-sm px-2 border-2 border-gray-500"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relavant">Sort by: Relavant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.length > 0 ? (
            filterProducts.map((product) => (
              <ProductItem key={product._id} product={product} />
            ))
          ) : (
            <p className="text-2xl text-gray-500">No products found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Collection;
