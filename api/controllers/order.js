'use strict';

module.exports = {
  findAll: findAll,
  getOne: getOne,
  save: save,
  update: update,
  delOrder: delOrder
};

// GET
function findAll(req, res) {
  res.json("all orders");
}

// GET
function getOne(req, res) {
  res.json("find a order");
}

// POST
function save(req, res) {
  res.json("new order");
}

// PUT
function update(req, res) {
  res.json("update");
}

// DELETE
function delOrder(req, res) {
  res.json("delete a order")
}
