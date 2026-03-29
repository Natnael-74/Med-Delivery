import { useEffect, useState } from "react";
import { BackendURL } from "../App";
import { toast } from "react-toastify";
import axios from "axios";
import { CURRENCY } from "../App";

function List({ token }) {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const res = await axios.get(BackendURL + "/api/products/list");
      if (res.data.success) {
        toast.success(res.data.message);
        setList(res.data.products);
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  async function handleDelete(id) {
    try {
      const res = await axios.delete(
        BackendURL + "/api/products/remove/" + id,
        {
          headers: {
            token,
          },
        },
      );
      if (res.data.success) {
        toast.success(res.data.message);
        await fetchList();
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
      <p className="mb-2">ALL PRODUCTS LIST</p>
      <div className="flex flex-col gap-2">
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          {" "}
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Actions</b>
        </div>
        {list.map((product, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border text-sm"
          >
            <img src={product.images[0]} alt="" className="w-12" />
            <p>{product.name}</p>
            <p>{product.category}</p>
            <p>
              {product.price}
              {CURRENCY}
            </p>
            <p
              onClick={() => handleDelete(product._id)}
              className="text-right md:text-center cursor-pointer text-lg"
            >
              X
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
