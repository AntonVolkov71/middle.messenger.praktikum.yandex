import InputFile from '../templates/partials/input-file';
import {Props} from "../types/component";
import Component from "../services/Component";

const inputFile = (props: Props = {}): Component => new InputFile(
  'div',
  {
    ...props,
  },
);

export default inputFile;
