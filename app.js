import express from "express";
import logger from "morgan";
import cors from "cors";
import { HttpCode } from "./lib/constants.js";

import shopsRouter from "./routes/api/shops.js";
import productsRouter from "./routes/api/products.js";
import ordersRouter from "./routes/api/orders.js"

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/shops", shopsRouter);
app.use("/api/products", productsRouter);
app.use("/api/orders", ordersRouter);

app.use((req, res) => {
    res
      .status(HttpCode.NOT_FOUND)
      .json({ status: "error", code: HttpCode.NOT_FOUND, message: "Not found" });
  });
  
  app.use((err, req, res, next) => {
    const statusCode = err.status || HttpCode.INTERNAL_SERVER_ERROR;
    const status =
      statusCode === HttpCode.INTERNAL_SERVER_ERROR ? "fail" : "error";
    res.status().json({
      status: status,
      code: statusCode,
      message: err.message,
    });
  });
  
  export default app;