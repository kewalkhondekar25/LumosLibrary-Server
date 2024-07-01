import { Router } from "express";
import { addToCart, deleteCart, getCart, removeFromCart } from "../controller/cart.controller.js";
import verifyJWT from "../middleware/user.middleware.js";

const router = Router();

router.route("/cart/:id").post(verifyJWT, addToCart);
router.route("/cart/:id").delete(verifyJWT, removeFromCart);
router.route("/cart").get(verifyJWT, getCart);
router.route("/cart").delete(verifyJWT, deleteCart);
export default router;