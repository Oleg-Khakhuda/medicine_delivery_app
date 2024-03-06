import mongoose from "mongoose";
const { Schema, model } = mongoose;

const shopSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const Shop = model("shop", shopSchema);

export default Shop;