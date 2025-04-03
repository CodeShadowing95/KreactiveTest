import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const SECRET_KEY = process.env.SECRET_KEY;

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const currentUser = await User.findOne({ email });
    if (!currentUser) return res.status(401).json({ message: 'Données d\'identification invalides' });

    const isPasswordCorrect = await bcrypt.compare(password, currentUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: 'Mot de passe incorrect' });

    const token = jwt.sign({ email: currentUser.email, id: currentUser._id }, SECRET_KEY, { expiresIn: '1h' });

    res.status(200).json({ result: currentUser, token });
  } catch (error) {
    res.status(500).json({ message: 'Erreur survenue lors de la connexion utilisateur' });
  }
}

export const secured = (req, res) => {
  res.json({ message: 'Accès autorisé. Vous pouvez profiter de la ressource.' });
}