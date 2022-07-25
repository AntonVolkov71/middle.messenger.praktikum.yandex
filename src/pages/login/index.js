import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('login', tpl);


const login = (props = {
    label: 'Вход',
}) => tpl(props)

export default login

