import repositoryOrders from "../../repository/orders.js"
import { HttpCode } from "../../lib/constants.js";

const addOrder = async (req, res) => {
    try {
      const newOrder = await repositoryOrders.addOrder(req.body);
      if (newOrder) {
        return res.status(HttpCode.CREATED).json(newOrder);
      }
    } catch (error) {
      res.status(HttpCode.NOT_FOUND).json({
        status: "error",
        code: HttpCode.NOT_FOUND,
        message: "Щось пішло не так",
      });
    }
  };

  export {addOrder};