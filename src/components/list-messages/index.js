import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('listMessages', tpl);

Handlebars.registerHelper('ifEqualsId', function(arg1, arg2, options) {
    return (arg1 === arg2) ? options.fn(this) : options.inverse(this);
});

export default (props = {}) => tpl(props);
