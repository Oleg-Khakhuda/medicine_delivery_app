import mongoose from "mongoose";
const { Schema, SchemaTypes, model } = mongoose;

const productsSchema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: "shops",
    },
  },
  { versionKey: false, timestamps: true }
);

const Products = model("products", productsSchema);

export default Products;