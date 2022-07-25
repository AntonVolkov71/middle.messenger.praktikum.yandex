import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('emptyChat', tpl);

export default (props = {}) => tpl(props);
