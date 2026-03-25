import { useNavigate } from "react-router-dom";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { useShop } from "../context/ShopContext";
import { MdDeleteOutline } from "react-icons/md";

function Cart() {
  const { currency, cart, productData, updateQuantity } = useShop();
  const navigate = useNavigate();

  // Convert cart object to array format
  const cartItems = [];
  for (const productId in cart) {
    for (const size in cart[productId]) {
      if (cart[productId][size] > 0) {
        cartItems.push({
          productId,
          size,
          quantity: cart[productId][size],
        });
      }
    }
  }

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title title="YOUR" subTitle="CART" />
      </div>
      <div>
        {cartItems.map((item) => {
          const product = productData.find(
            (product) => product._id === item.productId,
          );
          return (
            <div
              key={`${item.productId}-${item.size}`}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img src={product.images[0]} className="w-16 sm:w-20" />
                <div className="">
                  <p className="text-xs sm:text-lg font-medium">
                    {product.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency} {product.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                type="number"
                onChange={(e) => {
                  if (e.target.value === 0 || e.target.value === "") {
                    return null;
                  }
                  return updateQuantity(
                    item.productId,
                    item.size,
                    Number(e.target.value),
                  );
                }}
                min={1}
                defaultValue={item.quantity}
              />
              <MdDeleteOutline
                className="text-2xl cursor-pointer hover:text-red-600 transition-all duration-300"
                onClick={() => updateQuantity(item.productId, item.size, 0)}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-112.5">
          <CartTotal />
          <div className="w-full text-end">
            <button
              className="bg-black text-white text-sm my-8 px-8 py-3"
              onClick={() => navigate("/place-order")}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
