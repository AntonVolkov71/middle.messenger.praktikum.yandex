import Handlebars from 'handlebars';
import tpl from './tpl.hbs';

Handlebars.registerPartial('layoutTest', tpl);

const layoutTest = (props = {}) => tpl(props);

export default layoutTest;
