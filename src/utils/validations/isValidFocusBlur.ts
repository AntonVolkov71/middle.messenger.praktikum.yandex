import isValidation from "./isValidation";
import {ValidationTypes} from "../../types/utils";

const isValidFocusBlur = (type: ValidationTypes, value:string): boolean => isValidation(type, value)

export default isValidFocusBlur
