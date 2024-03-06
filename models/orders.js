import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productsSchema = new Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "shop",
  },
  amount: { type: String, required: true },
});

const orderSchema = Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    products: [productsSchema],
  },
  { versionKey: false, timestamps: true }
);

const Order = model("order", orderSchema);

export default Order;