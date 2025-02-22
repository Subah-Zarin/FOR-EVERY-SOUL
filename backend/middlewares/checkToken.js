// checkToken.js
import jwt from 'jsonwebtoken';
import User from '../models/users.js'; // Assuming you are using a User model

const checkToken = (req, res, next) => {
  const token = req.header('Authorization'); // Token should be in the Authorization header

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use your secret key here
    req.user = decoded.user; // The decoded user data from the token
    next(); // Proceed to the next middleware/controller
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Token is not valid' });
  }
};

export default checkToken;
