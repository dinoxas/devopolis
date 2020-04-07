const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');

// @route GET api/auth
// @desc Test route
// @acess Public (no teken needed)
// auth middleware is making this route protected (you need valid token)
router.get('/', auth, async (req, res) => {
  try {
    // req.user coming from middleware. Can be accessed from anywhere in a protected route
    // -password will leave off the password from data
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});
module.exports = router;
