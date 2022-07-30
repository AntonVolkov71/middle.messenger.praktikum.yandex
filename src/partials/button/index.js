import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('button', tpl);

const button = (props = {}) => tpl({
  ...props,
  type: 'button',
});

export default button;
