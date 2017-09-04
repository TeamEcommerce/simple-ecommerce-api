'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ImageSchema = new Schema({
  original_name: { type: String },
  mimetype: { type: String },
  type: { type: String },
  destination: { type: String },
  filename: { type: String },
  path: { type: String },
  size: { type: Number },
  active: { type: Boolean, default: true },
  created_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Image', ImageSchema);
