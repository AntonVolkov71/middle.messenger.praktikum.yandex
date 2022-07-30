import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('inputMessage', tpl);

const inputMessage = (props = {}) => tpl(props);

export default inputMessage;
