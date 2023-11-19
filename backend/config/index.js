import dotenv from 'dotenv';
dotenv.config();

const config = {
  PORT: process.env.PORT,
  RAZORPAY_API_KEY: process.env.RAZORPAY_API_KEY,
  RAZORPAY_API_SECRET: process.env.RAZORPAY_API_SECRET,
  MONGO_URI: process.env.MONGO_URI,
};

export default config;

