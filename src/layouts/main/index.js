import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('mainLayout', tpl);

const mainLayout = (props = {}) => tpl(props);

export default mainLayout;
