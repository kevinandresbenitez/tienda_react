
import jwt, { JwtPayload } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'Secret';
const JWT_EXPIRATION = process.env.JWT_EXPIRATION || '1h';



const generateToken = (user_id : number) => {
    return jwt.sign({ id: user_id}, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
};

const isValidToken = (token:string):boolean => {
    try {
        // Return a error if the token is invalid o expired
        jwt.verify(token, JWT_SECRET);
        return true;
        
    } catch (error) {
        return false;
    }
};

const getUserIdFromToken = (token: string): number | null => {
    try {
        const tokenData = jwt.verify(token, JWT_SECRET) as JwtPayload;
        return tokenData.id || null;
    } catch (error) {
        return null; 
    }
};


export {
    generateToken,
    isValidToken,
    getUserIdFromToken
}