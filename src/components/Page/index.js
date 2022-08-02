import Handlebars from 'handlebars';
import tpl from './tpl.hbs';

Handlebars.registerPartial('Page', tpl);

const Page = (props = {}) => tpl(props);

export default Page;
