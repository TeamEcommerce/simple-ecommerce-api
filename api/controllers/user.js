'use strict';

var bcrypt = require('bcrypt');
const saltRounds = 10;
var User = require('../models/user');

module.exports = {
  allUser: findAll,
  findAUser: getOne,
  newUser: save,
  updateUser: update,
  deleteUser: delUser
};

// GET
function findAll(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
}

// GET
function getOne(req, res) {
  User.findOne({_id: req.swagger.params.id.value}, function (err, user) {
    res.json(user);
  });
}

// POST
function save(req, res) {
  var user = new User();
  user.first_name = req.body.first_name;
  user.last_name  = req.body.last_name;
  user.email      = req.body.email;
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    if(err) return console.error(err)
    user.password = hash;
    user.save(function (err) {
      if (err) return console.error(err);
    });
    res.json(user);
  });
}

// PUT
function update(req, res) {
  var id = req.swagger.params.id.value;
  var query = {'_id': id};
  var user = new User();
  if(req.body.first_name != undefined) {
    user.first_name = req.body.first_name;
  }
  if(req.body.last_name != undefined) {
    user.last_name = req.body.last_name;
  }
  var updateUser = user.toObject();
  delete updateUser._id;
  User.findOneAndUpdate(query, updateUser, {upsert:true}, function(err, user) {
    if(err) console.log(err)
  });
  User.findOne({_id: id}, function (err, user) {
    if(err) console.log(err)
    res.json(user);
  });
}

// DELETE
function delUser(req, res) {
  res.json("delete a user")
}
