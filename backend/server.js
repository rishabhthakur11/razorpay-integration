import {app} from "./app.js"
import { connectDB } from "./config/database.js";
import config from "./config/index.js"
import Razorpay from "razorpay"


connectDB();
export const instance = new Razorpay({
  key_id: config.RAZORPAY_API_KEY,
  key_secret: config.RAZORPAY_API_SECRET,
});

app.listen(config.PORT, ()=>{
    console.log(`Server Listening on: ${config.PORT}`);
})

