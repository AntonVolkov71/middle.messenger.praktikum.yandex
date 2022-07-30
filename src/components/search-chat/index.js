import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('searchChat', tpl);

const searchChat = (props = {}) => tpl(props);

export default searchChat;
