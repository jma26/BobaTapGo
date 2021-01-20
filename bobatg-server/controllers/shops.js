const db = require('../models');
const Shop = db.shops;

// Create + Save New Shop
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name || !req.body.description) {
    res.status(400).send({
      message: 'Content is empty'
    });
    return;
  }

  // Create Shop
  const shop = new Shop({
    name: req.body.name,
    description: req.body.description,
    isActive: req.body.isActive,
    menu: req.body.menu.map(item => {
      return {
        title: item.title,
        category: item.category,
        price: item.price,
        description: item.description
      }
    })
  });

  // Save Shop in db
  shop
    .save(shop)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Error occurred while creating a new Shop'
      });
    });
};

// Retrieve a Shop by id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Shop.findById(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: 'No shop found with id: ' + id
        });
      } else {
        res.send(data);
      }
    })
    .catch(err => {
      res
        .status(500)
        .send({
          message: 'Error retrieving Shop by id: ' + err
        });
    })
};

// Update a Shop by id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data update can not be empty'
    });
  }

  const id = req.params.id;

  Shop.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Unable to update Shop by id: ${id}. Shop not found` 
        });
      } else {
        res.send({
          message: 'Shop updated successfully'
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error updating Shop with id: ' + id
      });
    });
};

// Delete a Shop by id
exports.delete = (req, res) => {
  const id = req.params.id;

  Shop.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          mesage: `Unable to delete Shop by id: ${id}. Shop not found`
        });
      } else {
        res.send({
          message: 'Shop deleted successfully'
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Unable to delete Shop with id: ' + id
      });
    });
};