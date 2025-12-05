import dotenv from "dotenv";
import mongooose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

/*
import express from "express"
const app = express ()
(async () => {
  try {
     await mongoose.connect(`${process.env.MONGODB_URL}/{DB_NAME}`);
     app.on("error", (error) =>{
          console.log("ERROR", error);
          throw error
     })
     app.listen(process.env.PORT,() =>{
        console.log(`APP IS LISTENING ON PORT
             ${process.env.PORT}`)
     })
    } catch (error) {
    console.error("ERROR : ", error);
    throw err;
  }
})();
*/
