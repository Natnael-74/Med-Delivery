import express from "express";
import {
  addProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "./productController.js";
import { adminAuth } from "../middleware/admin.js";

const router = express.Router();

// router.route("/").get(getProducts).post(addProduct);
// router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);

router.post("/add", adminAuth, addProduct);
router.post("/remove", adminAuth, deleteProduct);
router.post("/single", getProduct);
router.get("/list", getProducts);

export default router;
