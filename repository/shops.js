import Shops from "../models/shops.js";

const getAllShops = async () => {
    const shops = await Shops.find()
    return shops;
  };

  export default {getAllShops};