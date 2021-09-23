const mongoose = require('mongoose');

const db = {
  mongoose: mongoose,
};

db.stores = require('./store.model.js')(mongoose);

module.exports = db;