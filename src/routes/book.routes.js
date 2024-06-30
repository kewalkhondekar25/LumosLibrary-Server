import {Router} from "express"
import { getAllBooks, getSingleBook, uploadBooks } from "../controller/book.controller.js";

const router = Router();

router.route("/books").get(getAllBooks);
router.route("/books").post(uploadBooks);
router.route("/books/:id").get(getSingleBook);

export default router;