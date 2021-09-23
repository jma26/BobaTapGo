const router = require('express').Router();
const stores = require('../controllers/store.controller')

router.post('/register', stores.createUser);


module.exports = router;