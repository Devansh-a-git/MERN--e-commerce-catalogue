const fs = require("node:fs");

const data = JSON.parse(fs.readFileSync("data.json", "utf-8")).users;

exports.getAllUsers = (req, res) => {
  res.json(data);
};

exports.getUser = (req, res) => {
  const id = req.params.id;
  const index = data.findIndex((item) => item.id == id);

  res.json(data[index]);
};

exports.createUser = (req, res) => {
  data.push(req.body);
  res.send("post le liya");
};

exports.updateUser = (req, res) => {
  const id = req.params.id;
  const index = data.findIndex((item) => item.id == id);
  const newdata = req.body;
  data[index] = { ...data[index], ...newdata };

  res.send("post le le please liya");
};

exports.replaceUser = (req, res) => {
  const id = req.params.id;
  const index = data.findIndex((item) => item.id == id);
  const newdata = req.body;
  data[index] = { ...data[index], ...newdata };
  const jai = data[index];

  console.log(jai);

  res.send("post le le please liya");
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  const index = data.findIndex((item) => item.id == id);
  const remProd = data[index];
  data.splice(index, 1);
  res.json(remProd);
};
