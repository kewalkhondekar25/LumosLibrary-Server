import {Router} from "express";
import { loginUser, logoutUser, registerUser } from "../controller/user.controller.js";
import verifyJWT from "../middleware/user.middleware.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser); 
router.route("/logout").post(verifyJWT, logoutUser);


export default router;