import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('input', tpl);

export default (props = {
    type: 'text'
}) => tpl(props);
