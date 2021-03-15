import { Car } from "../Entities/car";
import { ResponseModel } from "./responseModel";

export interface CarRespondModel extends ResponseModel{
    data:Car[];
}