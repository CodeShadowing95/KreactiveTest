import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY;

export const tokenMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];

  if(!token) return res.status(403).json({ message: 'Accès non autorisé.' });

  jwt.verify(token.split(' ')[1], SECRET_KEY, (err, user) => {
    if(err) return res.status(403).json({ message: 'Token non valide.' });

    req.user = user;

    next();
  })
}