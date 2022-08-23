import Main from '../pages/Main';
import LayoutElement from './Layout';

const MainLayout = new LayoutElement(
	'div',
	{
		content: Main,
		attr: {
			class: 'main-layout',
		},
	},
);

export default MainLayout;
