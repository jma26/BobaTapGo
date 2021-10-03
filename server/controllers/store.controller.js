const Store = require('../models/store.model');

exports.createUser = async (req, res) => {
  let newStore = { ...req.body }
  
  try {
    const store = await new Store(newStore).save();
    res.status(201).send(store);
  } catch (err) {
    res.status(400).send(err.message);
  }

}
