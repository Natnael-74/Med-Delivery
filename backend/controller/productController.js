import { v2 as cloudinary } from "cloudinary";
import Product from "../models/productModel.js";

export async function addProduct(req, res) {
  try {
    const {
      name,
      description,
      price,
      image,
      sizes,
      category,
      subCategory,
      gender,
      bestSeller,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];
    const images = [image1, image2, image3, image4].filter(
      (image) => image !== undefined,
    );

    let imageUrls = [];
    if (images.length > 0) {
      const uploadPromises = images.map(async (image) => {
        const result = await cloudinary.uploader.upload(image.path, {
          resource_type: "image",
        });
        return result.secure_url;
      });
      imageUrls = await Promise.all(uploadPromises);
    }
    const productData = {
      name,
      description,
      price: parseFloat(price),
      image: imageUrls,
      category,
      subCategory,
      gender,
      bestSeller: bestSeller === "true",
      sizes: JSON.parse(sizes),
      date: new Date().toISOString(),
    };

    const product = await Product.create(req.body);
    return res
      .status(201)
      .json({ success: true, product, message: "Product Created" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function getProducts(req, res) {
  try {
    const products = await Product.find();
    return res.status(200).json({ success: true, products });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function getProduct(req, res) {
  try {
    const product = await Product.findById(req.body.productId);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    return res.status(200).json({ success: true, product });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function updateProduct(req, res) {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    return res.status(200).json({ success: true, product });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export async function deleteProduct(req, res) {
  try {
    // const product = await Product.findByIdAndDelete(req.params.id);
    const product = await Product.findByIdAndDelete(req.body.id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    return res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}
