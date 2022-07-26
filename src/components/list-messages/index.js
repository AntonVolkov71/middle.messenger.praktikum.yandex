import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('listMessages', tpl);

const listMessages = (props = {}) => tpl(props);

export default listMessages;
