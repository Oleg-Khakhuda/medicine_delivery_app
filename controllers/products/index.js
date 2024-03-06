import repositoryProducts from "../../repository/products.js"
import { HttpCode } from "../../lib/constants.js";

const getAllProducts = async (req, res, next) => {
    try {
      const products = await repositoryProducts.getAllProducts();
      if (products) {
        return res
          .status(HttpCode.OK)
          .json({ status: "success", code: HttpCode.OK, products });
      }
    } catch (error) {
      res.status(HttpCode.NOT_FOUND).json({
        status: "error",
        code: HttpCode.NOT_FOUND,
        message: "Щось пішло не так",
      });
    }
  };

  export {getAllProducts};