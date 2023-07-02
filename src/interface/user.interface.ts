import { Auth } from "./auth.interface";

export interface User extends Auth {
    name: String, 
    lastname: String,
    age: Number
}