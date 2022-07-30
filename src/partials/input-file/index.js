import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('inputFile', tpl);

const inputFile = (props = {
  type: 'text',
}) => tpl(props);

export default inputFile;
