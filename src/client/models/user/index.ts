import axios from "axios";
import { ApiResponse, userDto } from "../../../shared/api-types";


export class User {
    id: number
    name: string
    email: string

    constructor(id: number, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    static hydrate(dto: userDto): User {
        return new User(dto.id, dto.name, dto.email);
    }

}
