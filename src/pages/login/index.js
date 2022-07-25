import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('login', tpl);

export default (props = {
    label: 'Вход',
}) => tpl(props);
