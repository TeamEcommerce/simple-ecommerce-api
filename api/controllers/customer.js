'use strict';

var Customer = require('../models/customer');

module.exports = {
  allCustomer: findAll,
  findACustomer: getOne,
  newCustomer: save,
  updateCustomer: update,
  deleteCustomer: delCustomer
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
  var customer = new Customer();
  customer.first_name = req.body.first_name;
  customer.last_name  = req.body.last_name;
  customer.email      = req.body.email;
  customer.password   = req.body.password;
  customer.phone      = req.body.phone;
  customer.address    = req.body.address;
  customer.city       = req.body.city;
  customer.country    = req.body.country;
  customer.save(function (err) {
    if (err) return console.error(err);
  });
  res.json(customer);
}

// PUT
function update(req, res) {
  res.json("update");
}

// DELETE
function delCustomer(req, res) {
  res.json("delete a customer")
}
