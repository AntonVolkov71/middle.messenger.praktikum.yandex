import InputFile from '../templates/partials/input-file';

const inputFile = (props) => new InputFile(
  'div',
  {
    ...props,
  },
);

export default inputFile;
