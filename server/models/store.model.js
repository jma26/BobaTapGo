const mongoose = require('mongoose');
const crypto = require('crypto');

const StoreSchema = mongoose.Schema({
  shopName: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  fullName: String,
  salt: String,
  hash: String,
  menu: []

}, { timestamps: true })

// Schema.methods == Mongoose Instance methods
StoreSchema.methods.setPassword = function(password) {
  // Create unique salt for store account
  this.salt = crypto.randomBytes(16).toString('hex');

  // Hash store's salt and password
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
}

StoreSchema.methods.checkPassword = function(password) {

  // Use same method as hashing to check if password matches database
  let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
}

module.exports = mongoose.model('Store', StoreSchema);