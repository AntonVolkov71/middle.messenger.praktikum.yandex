import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('chat', tpl);

const chat = (props = {}) => tpl(props);

export default chat