const express = require('express');
const router = express.Router();

// @route GET api/auth
// @desc Test route
// @acess Public (no teken needed)
router.get('/', (req, res) => res.send('Auth route'));

module.exports = router;
