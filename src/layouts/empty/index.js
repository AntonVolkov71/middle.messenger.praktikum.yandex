import Handlebars from 'handlebars';

import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('emptyLayout', tpl);

const emptyLayout = (props = {}) => tpl(props);

export default emptyLayout;
