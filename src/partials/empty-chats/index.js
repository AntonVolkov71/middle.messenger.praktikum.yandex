import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('emptyChat', tpl);

const emptyChats = (props = {}) => tpl(props);
export default emptyChats
