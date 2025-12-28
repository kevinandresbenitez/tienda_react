import axios from "axios";
import { ApiResponse, userDto } from "../../../shared/api-types";


export class User {
    id: number
    name: string
    gmail: string

    constructor(id: number, name: string, gmail: string) {
        this.id = id;
        this.name = name;
        this.gmail = gmail;
    }


    static signIn(email: string, password: string): Promise<{ user: User | null, message: string }> {

        return new Promise(async (resolve, reject) => {

            try {

                const response = await axios.post<ApiResponse<userDto>>('/api/auth/signIn', { email, password });
                const userDto = response.data.payload;
                const message = response.data.message;

                if (!userDto) {
                    resolve({ user: null, message: message });
                    return;
                }

                resolve({ user: new User(userDto.id, userDto.name, userDto.email), message });

            } catch (error: any) {
                const message = error.response?.data?.message || "Error de conexión";
                resolve({ user: null, message });
            }
        })

    }
}
