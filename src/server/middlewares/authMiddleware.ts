import { verifyToken } from "../utils/jwt";

export const verifySession = (req: any, res: any, next: any) => {
    const token = req.cookies.auth_token; 

    if (!token) {
        return res.status(401).json({ message: "Token inválid" });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
        return res.status(401).json({ message: "Token inválid" });
    }
    
    next();

};