import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('profile', tpl);

const profile = (props = {}) => tpl(props);

export default profile