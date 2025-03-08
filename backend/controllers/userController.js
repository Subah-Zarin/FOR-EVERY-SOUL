import { Types } from "mongoose";
import Product from "../models/products.js";
import asyncHandler from "../utils/asyncHandler.js";
import { BadRequestError } from "../utils/errors.js";
import SSLCommerzPayment from "sslcommerz-lts";
import axios from "axios";
import Order from "../models/orders.js";
import User from "../models/users.js";

const SSL_IS_SANDBOX = process.env.SSL_IS_SANDBOX === "true";
const SSL_STORE_NAME = process.env.SSL_STORE_NAME;
const SSL_STORE_ID = process.env.SSL_STORE_ID;
const SSL_TRANSACTION_API = process.env.SSL_TRANSACTION_API;
const SSL_VALIDATION_API = process.env.SSL_VALIDATION_API;
const SSL_STORE_PASSWORD = process.env.SSL_STORE_PASSWORD;
const API_BASE_URL = process.env.API_BASE_URL;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN;

export const purchaseProduct = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const userId = req.user.id; // Assuming user authentication middleware adds user info to req
  
  const product = await Product.findById(productId).select("-__v -createdAt -updatedAt");
  if (!product) throw new BadRequestError("Product not found");
  
  const tranId = new Types.ObjectId().toString();
  const data = {
    total_amount: product.price,
    currency: "BDT",
    tran_id: tranId,
    success_url: `${API_BASE_URL}/products/payment-success/${tranId}`,
    fail_url: `${API_BASE_URL}/products/payment-fail/${tranId}`,
    cancel_url: `${API_BASE_URL}/products/payment-cancel/${tranId}`,
    shipping_method: "Courier",
    product_name: product.productName,
    product_category: "Electronic",
    product_profile: "general",
    cus_name: req.user.name,
    cus_email: req.user.email,
    cus_phone: req.user.phone,
  };

  const sslcz = new SSLCommerzPayment(SSL_STORE_ID, SSL_STORE_PASSWORD, SSL_IS_SANDBOX);
  sslcz.init(data).then(async (apiResponse) => {
    await Order.create({ transactionId: tranId, productId: product._id, userId, status: "pending" });
    return res.status(200).json({ paymentUrl: apiResponse.GatewayPageURL });
  }).catch((error) => {
    console.error(error);
    throw new BadRequestError("Payment initiation failed");
  });
});

export const successPayment = asyncHandler(async (req, res) => {
  const { tranId } = req.params;
  
  const order = await Order.findOneAndUpdate(
    { transactionId: tranId },
    { status: "success" }
  );

  if (!order) {
    console.error("Order not found!");
    return res.status(404).json({ error: "Order not found" });
  }

  const user = await User.findByIdAndUpdate(
    order.userId, 
    { $push: { donations: order } }, 
    { new: true }
  );

  if (!user) {
    console.error("User not found or update failed!");
  } else {
    console.log("Donation saved under user profile:", user);
  }

  return res.redirect(`${ALLOWED_ORIGIN}/payment-success`);
});
