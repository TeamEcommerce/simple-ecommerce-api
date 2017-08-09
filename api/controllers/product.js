'use strict';

module.exports = {
  findAll: findAll,
  getOne: getOne,
  save: save,
  update: update,
  delProduct: delProduct
};

// GET
function findAll(req, res) {
  res.json("all products");
}

// GET
function getOne(req, res) {
  res.json("find a product");
}

// POST
function save(req, res) {
  res.json("new product");
}

// PUT
function update(req, res) {
  res.json("update");
}

// DELETE
function delProduct(req, res) {
  res.json("delete a product")
}
