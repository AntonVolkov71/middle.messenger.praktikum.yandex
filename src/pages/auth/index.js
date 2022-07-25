import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('auth', tpl);

export default (props = {
    label: 'Регистрация',
}) => tpl(props);
