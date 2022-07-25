import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('serverError', tpl);

const serverError = (props = {
    type: 'text'
}) => tpl(props);

export default serverError
