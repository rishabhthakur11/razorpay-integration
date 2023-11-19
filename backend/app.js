import express from "express"
import paymentRoutes from "./routes/paymentRoutes.js" 
import cors from "cors";
import config from "./config/index.js";

export const app = express()


//middleware
app.use(cors());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({extended: true}))  // for parsing application/x-www-form-urlencoded


// routes
app.use("/api",paymentRoutes)

app.get("/api/getkey",(req,res)=>{
    res.status(200).json({
        success: true,
        data: config.RAZORPAY_API_KEY
    })  
})


