import { AppDataSource } from "../config/db/config";
import { User } from "../models/user";
import { comparePassword, hashPassword } from "../utils/bcrypt";
import { generateToken } from "../utils/jwt";
import {ApiResponse,userDto } from "../../shared/api-types"

/**
 * POST /api/auth/signIn
 *
 * Signs in a user with email and password.
 *
 * Request body:
 * {
 *   email: string,    
 *   password: string  
 * }
 *
 * Successful response:
 * 200 - Login successfull sets an HTTP-only cookie `auth_token` for authentication
 * {
 *   message: "Signed in successfully",
 *   payload: {
 *     id: string,     
 *     name: string,   
 *     email: string   
 *   }
 * }
 *
 * Errors:
 * 400 - Email and password required
 * { message: "Email and password required" }
 * 401 - Invalid credentials
 * { message: 'Invalid credentials' }
 * 500 - Internal server error
 * { message: "error db connection" }
 */
const signIn = async (req:any, res:any) => { 
    try{

        const { email, password } = req.body;
        const userRepository = AppDataSource.getRepository(User); 
        let user: User | null = null;

        // Verify body form
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password required" }) satisfies ApiResponse;
        }
        
        // Verify email
        try{
            user = await userRepository.findOne({where:{email:email}});        
        }catch(e){
            console.log(e);
        }

        // User exist
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' }) satisfies ApiResponse;
        }

        // Verify password
        const isPasswordValid = await comparePassword(password,user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' }) satisfies ApiResponse;
        }
        
        // Generate payload
        const payload:userDto = {
            id:user.id,
            name:user.name,
            email:user.email
        }

        // Generate token
        const token = generateToken(payload);

        // Save cookie
        res.cookie('auth_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: Number(process.env.COOKIES_EXPIRATION), 
            sameSite: 'Strict', 
        });
        
        const response:ApiResponse<userDto> = {
            message: 'Signed in successfully', 
            payload
        }
        
        return res.status(200).json(response) satisfies ApiResponse<userDto>;

    }catch(error){
        res.status(500).json({ message: "error db conection" } satisfies ApiResponse);
    }
};

const signUp = async (req:any, res:any) => {
    res.send('signUp')
};

const logOut = async (req:any, res:any) => {
    
    res.clearCookie('auth_token', {
        httpOnly: true,
        sameSite: 'strict'
    });
    
    return res.status(200).json({ message: "Logged out successfully" } satisfies ApiResponse);
};

const getProfile = async (req:any, res:any) => {
    const userDto = req.user;

    return res.status(200).json({
        message: "User authenticated",
        payload: userDto
    }) satisfies ApiResponse;
};

export default {signIn,signUp,logOut,getProfile}