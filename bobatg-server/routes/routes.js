module.exports = routes => {
  const shops = require('../controllers/shops.js');
  const router = require('express').Router();

  // Create new Shop
  router.post('/', shops.create);

  // Find Shop by id
  router.get('/:id', shops.findOne);

  // Update Shop by id
  router.put('/:id', shops.update);

  // Delete Shop by id
  router.delete('/:id', shops.delete);

  routes.use('/api/shops', router);

}