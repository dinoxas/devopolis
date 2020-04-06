const express = require('express');
const router = express.Router();

// @route GET api/profile
// @desc Test route
// @acess Public (no teken needed)
router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;
