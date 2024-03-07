import Products from "../models/product.js";

const getAllProducts = async () => {  
    const product = await Products.find({});
    return product;
  };

const getProductsByShop = async (shopId) => {  
  const product = await Products.find({owner: shopId});
  return product;
};

  export default {getAllProducts, getProductsByShop};