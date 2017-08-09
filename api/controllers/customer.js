'use strict';

module.exports = {
  findAll: findAll,
  getOne: getOne,
  save: save,
  update: update,
  delCustomer: delCustomer
};

// GET
function findAll(req, res) {
  res.json("all customer");
}

// GET
function getOne(req, res) {
  res.json("find a customer");
}

// POST
function save(req, res) {
  res.json("new customer");
}

// PUT
function update(req, res) {
  res.json("update");
}

// DELETE
function delCustomer(req, res) {
  res.json("delete a customer")
}
