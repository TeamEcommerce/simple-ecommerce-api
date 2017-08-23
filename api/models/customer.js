'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
	first_name: { type: String },
  last_name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  phone: { type: String },
  address: { type: String },
  city: { type: String },
  country: { type: String },
  active: { type: Boolean, default: true },
  created_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Customer', CustomerSchema);
