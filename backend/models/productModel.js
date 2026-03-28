import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
  },
  description: {
    type: String,
    required: true,
    maxLength: [1000, "Description cannot exceed 1000 characters"],
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  image: {
    type: Array,
    required: true,
  },
  category: {
    type: String,
    required: [true, "Please enter product category"],
  },
  subCategory: {
    type: String,
    required: [true, "Please enter product sub-category"],
  },
  gender: {
    type: String,
    required: true,
  },
  ageCategory: {
    type: String,
    required: true,
  },
  sizes: {
    type: Array,
    required: true,
  },
  bestSeller: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    //default: Date.now,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
