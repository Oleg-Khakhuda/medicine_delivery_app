import Order from "../models/orders.js";

const addOrder = async (body) => {
    const order = await Order.create(body);
    return order;
  };

  export default {addOrder};