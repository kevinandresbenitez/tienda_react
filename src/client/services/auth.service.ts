import axios from "axios";
import { ApiResponse, userDto } from "../../shared/api-types";

export class AuthService {

  static async signIn(email: string, password: string):Promise<ApiResponse<userDto>>{
    const response = await axios.post<ApiResponse<userDto>>('/api/auth/signIn', { email, password });
    return response.data; 
  }

  static async logOut():Promise<ApiResponse>{
    const response = await axios.post<ApiResponse>('/api/auth/logOut');
    return response.data;
  }

  static async getProfile():Promise<ApiResponse<userDto>>{
    try {
      const response = await axios.get<ApiResponse<userDto>>('/api/auth/profile');
      return response.data;
    } catch (error: any) {
      if (error.response?.status === 401) return {message:"error fetching"};
      throw error;
    }
  }
}