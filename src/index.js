import dotenv from "dotenv";
import connectDB from "./db/db.js";
import app from "./app.js";

dotenv.config({path: "../.env"});

connectDB()
.then(() =>{
  app.listen(process.env.PORT || 8080, () => {
    console.log(`SERVER IS RUNNING ON PORT: ${process.env.PORT}`);
  })
}).catch(() => {
  console.log("MONGO DB CONNECTION FAILED");
});