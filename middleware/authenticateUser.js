import jwt from "jsonwebtoken";
import User from "../models/userModels.js";
import cookie from 'cookie'

const SECRET_KEY = 'sect-backnd-key';

export const loginUser = async (req, res, next) => {
    
  const cookies =cookie.parse(req.headers.cookie || '');
  const token = cookies.jwt;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Please log in First' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized: Invalid user' });
    }

    req.user = {
      userId: user._id,
      username: user.username,
    };
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};