import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cookieParser());

//routes
import userRouter from "./routes/user.routes.js";
import bookRouter from "./routes/book.routes.js";
app.use("/api/v1/user", userRouter);
app.use("/api/v1/discover", bookRouter);

export default app;