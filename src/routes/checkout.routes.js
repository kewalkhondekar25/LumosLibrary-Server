import { Router } from "express";
import { checkOut } from "../controller/checkout.controller.js";
import verifyJWT from "../middleware/user.middleware.js";

const router = Router();

router.route("/checkout").post(verifyJWT, checkOut);

export default router;