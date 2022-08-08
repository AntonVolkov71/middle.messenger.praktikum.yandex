import ValidationTypes from "../../types/validation";
import isValidation from "./isValidation";

const isValidFocusBlur = (type: ValidationTypes, value): boolean => isValidation(type, value)

export default isValidFocusBlur
