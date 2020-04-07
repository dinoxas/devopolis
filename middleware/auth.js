const jwt = require('jsonwebtoken');
const config = require('config');

// middleware
// More info https://expressjs.com/en/guide/writing-middleware.html

// HTTP request argument to the middleware function, called "req" by convention.
// HTTP response argument to the middleware function, called "res" by convention.
// Callback argument to the middleware function, called "next" by convention.

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');
  // Check if no token
  if (!token) {
    // 401 not authroised
    return res.status(401).json({ msg: 'No token, authorisation denied' });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    // user with id in the payload coming from jwt.sign()
    req.user = decoded.user;
    // callback to pass control to the next middleware function
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
