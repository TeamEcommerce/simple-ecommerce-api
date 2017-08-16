'use strict';

var Category = require('../models/category');

module.exports = {
  findAll: findAll,
  getOne: getOne,
  save: save,
  update: update,
  delCategory: delCategory
};

// GET
function findAll(req, res) {
  Category.find({}, function(err, categories) {
      res.json(categories);
  });
}

// GET
function getOne(req, res) {
  res.json("find a category");
}

// POST
function save(req, res) {
  var category = new Category();
  category.name = req.body.name;
  category.description = req.body.description;
  category.save(function (err) {
    if (err) return console.error(err);
  });
  res.json(category);
}

// PUT
function update(req, res) {
  res.json("update");
}

// DELETE
function delCategory(req, res) {
  res.json("delete a category")
}
