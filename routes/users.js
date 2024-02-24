const express = require("express");
const Router = express.Router();

const userController = require("../controller/user-controller");

Router.get("/", userController.getAllUsers)
  .get("/:id", userController.getUser)
  .post("/", userController.createUser)
  .put("/:id", userController.replaceUser)
  .patch("/:id", userController.updateUser)
  .delete("/:id", userController.deleteUser);

exports.router = Router;
