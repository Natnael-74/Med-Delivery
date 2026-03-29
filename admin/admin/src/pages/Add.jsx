import axios from "axios";
import { MdOutlineUploadFile } from "react-icons/md";
import { BackendURL } from "../App";
import { useState } from "react";

function Add() {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("men");
  const [subcategory, setSubcategory] = useState("adult");
  const [price, setPrice] = useState("");
  const [sizes, setSizes] = useState([]);
  const [bestseller, setBestseller] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append("image1", image1);
      formData.append("image2", image2);
      formData.append("image3", image3);
      formData.append("image4", image4);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("subcategory", subcategory);
      formData.append("price", price);
      formData.append("sizes", JSON.stringify(sizes));
      formData.append("bestseller", bestseller);

      const res = await axios.post(BackendURL + "/api/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full items-start">
      <div>
        <p className="mb-2">Upload image</p>
        <div className="flex gap-2 ">
          <label htmlFor="image1">
            {image1 ? (
              <img
                className="w-30 h-30 object-cover"
                src={URL.createObjectURL(image1)}
                alt=""
              />
            ) : (
              <MdOutlineUploadFile className="text-9xl border border-dashed border-gray-300 cursor-pointer" />
            )}
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              id="image1"
              type="file"
              className="hidden"
            />
          </label>
          <label htmlFor="image2">
            {image2 ? (
              <img
                className="w-30 h-30 object-cover"
                src={URL.createObjectURL(image2)}
                alt=""
              />
            ) : (
              <MdOutlineUploadFile className="text-9xl border border-dashed border-gray-300 cursor-pointer" />
            )}
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              id="image2"
              type="file"
              className="hidden"
            />
          </label>
          <label htmlFor="image3">
            {image3 ? (
              <img
                className="w-30 h-30 object-cover"
                src={URL.createObjectURL(image3)}
                alt=""
              />
            ) : (
              <MdOutlineUploadFile className="text-9xl border border-dashed border-gray-300 cursor-pointer" />
            )}
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              id="image3"
              type="file"
              className="hidden"
            />
          </label>
          <label htmlFor="image4">
            {image4 ? (
              <img
                className="w-30 h-30 object-cover"
                src={URL.createObjectURL(image4)}
                alt=""
              />
            ) : (
              <MdOutlineUploadFile className="text-9xl border border-dashed border-gray-300 cursor-pointer" />
            )}
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              id="image4"
              type="file"
              className="hidden"
            />
          </label>
        </div>
      </div>
      <div className="w-full">
        <p className="mb-2">Product name</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter product name"
          className="w-full py-2 px-3 max-w-[500px]"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Product description</p>
        <textarea
          rows="5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Enter product description"
          className="w-full py-2 px-3 max-w-[500px]"
          required
        />
      </div>
      <div className="flex flex-col sm:flex-row w-full gap-2 sm:gap-8 items-center">
        <div>
          <p className="mb-2">Product category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="w-full py-2 px-3 max-w-[500px]"
          >
            <option value="men">Men</option>
            <option value="women">Women</option>
          </select>
        </div>
        <div>
          <p className="mb-2">Sub category</p>
          <select
            onChange={(e) => setSubcategory(e.target.value)}
            className="w-full py-2 px-3 "
          >
            <option value="old">Old</option>
            <option value="adult">Adult</option>
            <option value="kids">Kids</option>
          </select>
        </div>
        <div>
          <p className="mb-2">Product price</p>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            className="w-full py-2 px-3 sm:w-[120px]"
            required
            min="0"
          />
        </div>
      </div>
      <div>
        <p className="mb-2">Product sizes</p>
        <div className="flex gap-3">
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("S")
                  ? prev.filter((size) => size !== "S")
                  : [...prev, "S"],
              )
            }
          >
            <p
              className={`${sizes.includes("S") && `-translate-y-1 border`} bg-slate-200 px-3 py-1 cursor-pointer hover:bg-slate-400 transition-all duration-300`}
            >
              S
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("M")
                  ? prev.filter((size) => size !== "M")
                  : [...prev, "M"],
              )
            }
          >
            <p
              className={`${sizes.includes("M") && `-translate-y-1 border`} bg-slate-200 px-3 py-1 cursor-pointer hover:bg-slate-400 transition-all duration-300`}
            >
              M
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("L")
                  ? prev.filter((size) => size !== "L")
                  : [...prev, "L"],
              )
            }
          >
            <p
              className={`${sizes.includes("L") && `-translate-y-1 border`} bg-slate-200 px-3 py-1 cursor-pointer hover:bg-slate-400 transition-all duration-300`}
            >
              L
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("XL")
                  ? prev.filter((size) => size !== "XL")
                  : [...prev, "XL"],
              )
            }
          >
            <p
              className={`${sizes.includes("XL") && `-translate-y-1 border`} bg-slate-200 px-3 py-1 cursor-pointer hover:bg-slate-400 transition-all duration-300`}
            >
              XL
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("XXL")
                  ? prev.filter((size) => size !== "XXL")
                  : [...prev, "XXL"],
              )
            }
          >
            <p
              className={`${sizes.includes("XXL") && `-translate-y-1 border`} bg-slate-200 px-3 py-1 cursor-pointer hover:bg-slate-400 transition-all duration-300`}
            >
              XXL
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <input
          type="checkbox"
          checked={bestseller}
          onChange={() => setBestseller((bestseller) => !bestseller)}
          className="mr-2"
          id="bestseller"
        />
        <label htmlFor="bestseller" className="cursor-pointer">
          Add to bestseller
        </label>
      </div>
      <button
        type="submit"
        className="w-28 py-3 mt-4 bg-black text-white cursor-pointer hover:bg-gray-700 transition-all duration-300"
      >
        ADD
      </button>
    </form>
  );
}

export default Add;
