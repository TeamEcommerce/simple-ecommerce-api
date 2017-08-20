'use strict';

var Category = require('../models/category');

module.exports = {
  allCategories: findAll,
  findACategory: getOne,
  newCategory: save,
  updateCategory: update,
  deleteCategory: delCategory
};

// GET
function findAll(req, res) {
  Category.find({}, function(err, categories) {
    res.json(categories);
  });
}

// GET
function getOne(req, res) {
  Category.findOne({_id: req.swagger.params.id.value}, function (err, category) {
    res.json(category);
  });
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
  var id = req.swagger.params.id.value;
  var query = {'_id': id};
  var category = new Category({
    'name': req.body.name,
    'description': req.body.description
  });
  var updateCategory = category.toObject();
  delete updateCategory._id;
  Category.findOneAndUpdate(query, updateCategory, {upsert:true}, function(err, cat) {
    if(err) console.log(err)
  });
  Category.findOne({_id: id}, function (err, cat) {
    if(err) console.log(err)
    res.json(cat);
  });
}

// DELETE
function delCategory(req, res) {
  res.json("delete a category")
}
