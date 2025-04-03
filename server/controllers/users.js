import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/visitor.js';

const SECRET_KEY = process.env.SECRET_KEY || "s6cr8qi";

export const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Identifiants invalides" });
    }

    const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
};

export const protectedRoute = async (req, res) => {
    res.json({ message: "Vous êtes authentifié" });
};