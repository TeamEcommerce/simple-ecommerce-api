'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  admin: { type: Boolean, default: true },
  active: { type: Boolean, default: true },
  created_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
