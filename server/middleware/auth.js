import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY;

const authMiddleware = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) return res.status(401).json({ message: "Accès refusé" });
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch {
        res.status(401).json({ message: "Token invalide" });
    }
};

export default authMiddleware;