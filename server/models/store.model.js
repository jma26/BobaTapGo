const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  shopName: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  fullName: String,
  password: String,
  menu: []

}, { timestamps: true })

module.exports = new mongoose.model('Store', storeSchema);