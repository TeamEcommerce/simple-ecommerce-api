'use strict';

var Image = require('../models/image');

module.exports = {
  findAll: findAll,
  getOne: getOne,
  newImage: save,
  update: update,
  delImage: delImage
};

// GET
function findAll(req, res) {
  res.json("all images");
}

// GET
function getOne(req, res) {
  res.json("find a image");
}

// POST
function save(req, res) {
  var image = new Image();
  image.original_name = req.file.originalname;
  image.mimetype = req.file.mimetype;
  image.destination = req.file.destination;
  image.filename = req.file.filename;
  image.path = req.file.path;
  image.size = req.file.size;
  image.save(function (err) {
    if (err) return console.error(err);
  });
  res.json("ok");
}

// PUT
function update(req, res) {
  res.json("update");
}

// DELETE
function delImage(req, res) {
  res.json("delete a image")
}
