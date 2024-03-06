import repositoryShops from "../../repository/shops.js"
import { HttpCode } from "../../lib/constants.js";

const getAllShops = async (req, res, next) => {
    try {
      const shops = await repositoryShops.getAllShops();
      
      if (shops) {
        return res
          .status(HttpCode.OK)
          .json({ status: "success", code: HttpCode.OK, shops });
      }
    } catch (error) {
      res.status(HttpCode.NOT_FOUND).json({
        status: "error",
        code: HttpCode.NOT_FOUND,
        message: "Щось пішло не так",
      });
    }
  };

  export {getAllShops};