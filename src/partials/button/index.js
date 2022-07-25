import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('button', tpl);

const button = (id, className, type = 'button', label) => tpl({id, className, type, label});

export default button