const jwt = require('jsonwebtoken');

exports.protect = async function(req, res, next) {
  console.log('Your are inside protect middleware');
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token)
    return res.status(400).json({
      message: 'You have not a token'
    });

  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    next();
  } catch (err) {
    res.status(400).json({
      message: 'Your token is expired or invalid'
    });
  }
};
