const express = require('express');
const router = express.Router();

// @route GET api/users
// @desc Test route
// @acess Public (no teken needed)
router.get('/', (req, res) => res.send('Users route'));

module.exports = router;
