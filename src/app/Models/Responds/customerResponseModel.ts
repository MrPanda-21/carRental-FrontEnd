import { Customer } from "../Entities/customer";
import { ResponseModel } from "./responseModel";

export interface CustomerRespondModel extends ResponseModel{
    data: Customer[];
}