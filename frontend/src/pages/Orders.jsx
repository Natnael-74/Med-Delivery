import { useShop } from "../context/ShopContext";
import Title from "../components/Title";

function Orders() {
  const { products, currency } = useShop();
  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title title="MY" subTitle="ORDERS" />
      </div>
      <div>
        {products?.slice(1, 4).map((product, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img
                src={product.images[0]}
                className="w-16 sm:w-20"
                alt="product"
              />
              <div className="">
                <p className="sm:text-base font-medium">{product.name}</p>
                <div className="flex items-center gap-5 mt-2 text-base text-gray-700">
                  <p className="text-lg">
                    {currency} {product.price}
                  </p>
                  <p>Quantity : 1</p>
                  <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                    Size: M
                  </p>
                </div>
                <p className="mt-2">
                  {" "}
                  Date:
                  <span className="text-gray-400 ">25 july ,2026</span>
                </p>
              </div>
            </div>
            <div className="flex justify-between md:w-1/2">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500 "></p>
                <p className="text-sm md:text-base">Ready to ship</p>
              </div>
              <button className="border px-4 py-2 text-sm font-medium rounded-sm border-r">
                Track order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
