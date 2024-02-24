const express = require("express");
const Router = express.Router();

const prodController = require("../controller/product-controller");

Router.get("/", prodController.getAllProducts)
  .get("/:id", prodController.getProduct)
  .post("/", prodController.createProduct)
  .put("/:id", prodController.replaceProduct)
  .patch("/:id", prodController.updateProduct)
  .delete("/:id", prodController.deleteProduct);

exports.router = Router;
