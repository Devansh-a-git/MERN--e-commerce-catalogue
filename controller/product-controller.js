const fs = require("node:fs");
const data = require("../model/product");

const Product = data.Product;

///////////////////////////////// READ

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.getProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findOne({ id: id });

  res.json(product);
};

////////////////////////////////// CREATE

exports.createProduct = async (req, res) => {
  const product = new Product(req.body);

  product
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

//////////////////////////////// UPDATE

exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findOneAndReplace({ id: id }, req.body, {
    new: true,
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findOneAndUpdate({ id: id }, req.body, {
    new: true,
  })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

//////////////////////////////////////// DELETE

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findOneAndDelete({ _id: id })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};
