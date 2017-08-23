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
  Customer.find({}, function(err, customers) {
    res.json(customers);
  });
}

// GET
function getOne(req, res) {
  Customer.findOne({_id: req.swagger.params.id.value}, function (err, customer) {
    res.json(customer);
  });
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
  var id = req.swagger.params.id.value;
  var query = {'_id': id};
  var customer = new Customer();
  if(req.body.first_name != undefined) {
    customer.first_name = req.body.first_name;
  }
  if(req.body.last_name != undefined) {
    customer.last_name = req.body.last_name;
  }
  if(req.body.email != undefined) {
    customer.email = req.body.email;
  }
  if(req.body.password != undefined) {
    customer.password = req.body.password;
  }
  if(req.body.phone != undefined) {
    customer.phone = req.body.phone;
  }
  if(req.body.address != undefined) {
    customer.address = req.body.address;
  }
  if(req.body.city != undefined) {
    customer.city = req.body.city;
  }
  if(req.body.country != undefined) {
    customer.country = req.body.country;
  }
  if(req.body.active != undefined) {
    customer.active = req.body.active;
  }
  var updateCustomer = customer.toObject();
  delete updateCustomer._id;
  Customer.findOneAndUpdate(query, updateCustomer, {upsert:true}, function(err, cos) {
    if(err) console.log(err)
  });
  Customer.findOne({_id: id}, function (err, cos) {
    if(err) console.log(err)
    res.json(cos);
  });
}

// DELETE
function delCustomer(req, res) {
  res.json("delete a customer")
}
