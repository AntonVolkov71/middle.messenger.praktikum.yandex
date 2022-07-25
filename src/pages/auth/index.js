import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('auth', tpl);

const auth = (props = {
    label: 'Регистрация',
}) => tpl(props);

export default auth
