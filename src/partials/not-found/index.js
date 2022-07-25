import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('notFound', tpl);

const notFound = (props = {
    type: 'text'
}) => tpl(props)

export default notFound
