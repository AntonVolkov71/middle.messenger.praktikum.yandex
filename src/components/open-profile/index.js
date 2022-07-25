import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('openProfile', tpl);

const openProfile = (props = {}) => tpl(props);

export default openProfile