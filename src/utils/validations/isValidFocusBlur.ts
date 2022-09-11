import { ValidationTypes } from '@myTypes/utils';
import isValidation from './isValidation';

const isValidFocusBlur = (type: ValidationTypes, value:string): boolean => isValidation(type, value);

export default isValidFocusBlur;
