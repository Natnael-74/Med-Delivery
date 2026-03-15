import { Link } from "react-router-dom";

import { useShop } from "../context/ShopContext";

function ProductItem({ product }) {
  //console.log(product);
  const { currency } = useShop();
  const { _id, name, price, images } = product;
  return (
    <div>
      <Link to={`/product/${_id}`} className="text-gray-700 cursor-pointer">
        <div className="overflow-hidden">
          <img
            loading="lazy"
            src={images?.at(0)}
            alt={name}
            className="aspect-square object-cover transition-all duration-300 hover:scale-110 ease-in-out"
          />
        </div>

        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="text-sm font-medium">
          {currency} {price}
        </p>
      </Link>
    </div>
  );
}

export default ProductItem;
