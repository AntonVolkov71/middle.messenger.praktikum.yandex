import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('activeChat', tpl);

export default (props = {}) => tpl(props);
