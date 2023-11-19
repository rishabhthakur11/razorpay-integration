import config from "../config/index.js";
import { Payment } from "../models/PaymentModel.js";
import { instance } from "../server.js";
import crypto from "crypto";

// @desc    Create a new order
// @route   POST /api/payment/checkout
// @access  Public

export const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };
  const order = await instance.orders.create(options);
  console.log(order);
  res.status(200).json({
    success: true,
    order,
  });
};

// @desc    Verify payment
// @route   POST/api/payment/paymentverification
// @access  Public


export const paymentverification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", config.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");
    console.log("Payment successful")

  const isAuthentic = expectedSignature === razorpay_signature;
  if (isAuthentic) 
  {
    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    });
    res.redirect(
      `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    res.status(400).json({
        success: false,
      });
  }
};
