require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
  console.log("db connected");
}

const ProductRouter = require("./routes/products");

const UserRouter = require("./routes/users");

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.static(process.env.PUBLIC_DIR));
server.use(morgan("dev"));

server.use("/products", ProductRouter.router);
server.use("/users", UserRouter.router);
server.use("*", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

server.listen(process.env.PORT);
