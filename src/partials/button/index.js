import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('button', tpl);

export default (id, className, type='button', label) => tpl({ id, className, type, label });
