import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('activeChat', tpl);

const activeChat = (props = {}) => tpl(props);

export default activeChat;
