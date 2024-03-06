import Products from "../models/product.js";

const getAllProducts = async () => {  
    const product = await Products.find();
    return product;
  };

  export default {getAllProducts};