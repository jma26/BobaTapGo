const router = require('express').Router();
const stores = require('../controllers/store.controller')

router.post('/register', stores.createStore);
router.post('/login', stores.getStore);


module.exports = router;