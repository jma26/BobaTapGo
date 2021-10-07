const Store = require('../models/store.model');

exports.createStore = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  // Initialize new Store object
  const newStore = new Store();
  newStore.email = email;
  newStore.password = password
  
  // Call instance method, setPassword to hash password
  newStore.setPassword(password);
  
  try {

    let response = await newStore.save();
    return res.status(201).send({
      message: `User added successfully, ${response}`
    });
  } catch (err) {
    return res.status(400).send(err.message);
  }

}

exports.getStore = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  try {
    const store = await Store.findOne({email});
    if (!store) {
      return res.status(404).send('Account Not Found');
    } else {
      // store returns a promise with the mongodb document
      if (store.checkPassword(password)) {
        return res.status(201).send({
          message: 'User logged in',
          store: store
        });
      } else {
        return res.status(400).send('Wrong Password');
      };
    }
  } catch (err) {
    return res.status(400).send(err.message);
  }

}