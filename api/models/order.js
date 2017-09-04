'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
  status: { type: String },
  code_ref: { type: String },
  payment_gateway: { type: String },
  customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
  product: { type: Schema.Types.ObjectId, ref: 'Product' },
  stock: { type: Number, min: 0 },
  active: { type: Boolean, default: true },
  created_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);
