import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const secretKey = process.env.JWT_SECRET;

export const verifyToken = (req, res, next) => {
    const reqHeader = req.headers['authorization'];
    // console.log("header",reqHeader)

    const token = reqHeader
        ? reqHeader && reqHeader.split(' ')[1]
        : req.cookies.token;

    // console.log(req.cookies.token)

    if (!token) {
        return res.status(401).json({ message: 'Authentication required' });
    }

    try {
        const decoded = jwt.verify(token, secretKey);

        req.user = decoded;
        // console.log(decoded);

        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

export const getSignedJwtToken = async (data) => {
    return jwt.sign(data, process.env.JWT_SECRET, {
        expiresIn: '7d',
    });
};
