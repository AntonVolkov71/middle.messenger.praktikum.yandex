import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('input', tpl);

const input = (props = {
    type: 'text'
}) => tpl(props)

export default input
