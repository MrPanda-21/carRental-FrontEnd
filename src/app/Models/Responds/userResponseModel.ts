import { User } from "../Entities/user";
import { ResponseModel } from "./responseModel";

export interface UserResponseModel extends ResponseModel{
    data: User[];
}