import render from './render';
import serverError from '../display-components/components/Server-error';
import propsEmptyLayout from '../display-components/layout/propsEmptyLayout';
import LayoutElement from '../display-components/layout/Layout';

const rootSelector: string = '#root';

const renderServerError = (): void => {
	serverError.setProps({
		httpStatus: 500,
	});

	const errorLayout = new LayoutElement(
		'div',
		{
			...propsEmptyLayout,
			content: serverError,
		},
	);

	render(rootSelector, errorLayout);
};

export default renderServerError;
