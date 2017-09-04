'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  status: { type: String },
  name: { type: String },
  image: { type: Schema.Types.ObjectId, ref: 'Image' },
  stock: { type: Number, min: 0 },
  price: { type: Number, min: 0.0 },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  active: { type: Boolean, default: true },
  created_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', ProductSchema);
