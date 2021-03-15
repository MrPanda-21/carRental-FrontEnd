import { Color } from "../Entities/color";
import { ResponseModel } from "./responseModel";

export interface ColorRespondModel extends ResponseModel{
    data :Color[];
}