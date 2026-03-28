import express from "express";
import {
  addProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "./productController.js";

const router = express.Router();

// router.route("/").get(getProducts).post(addProduct);
// router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);

router.post("/add", addProduct);
router.post("/remove", deleteProduct);
router.post("/single", getProduct);
router.get("/list", getProducts);

export default router;
