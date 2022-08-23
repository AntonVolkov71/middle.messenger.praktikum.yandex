import LayoutElement from './Layout';
import Login from '../pages/Login';

const EmptyLayout = new LayoutElement(
	'div',
	{
		content: Login,
		attr: {
			class: 'empty-layout',
		},
	},
);

export default EmptyLayout;
