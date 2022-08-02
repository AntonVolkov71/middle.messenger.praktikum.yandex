import Handlebars from 'handlebars';
import tpl from './tpl.hbs';

Handlebars.registerPartial('test', tpl);

const test = (props = {}) => tpl(props);

export default test;
