const Store = require('../models/store.model');

exports.createStore = async (req, res) => {
  let newStore = { ...req.body };
  
  try {
    const store = await new Store(newStore).save();
    return res.status(201).send(store);
  } catch (err) {
    return res.status(400).send(err.message);
  }

}

exports.getStore = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  try {
    const store = await Store.findOne({email, password}).exec();
    if (store) {
      console.log(store);
      return res.status(200).send(store);
    } else if (!store) {
      return res.status(404).send('Account Not Found');
    }
  } catch (err) {
    return res.status(400).send(err.message);
  }
}