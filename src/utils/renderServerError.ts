import serverError from '@components/Server-error';
import propsEmptyLayout from '@layout/propsEmptyLayout';
import LayoutElement from '@layout/Layout';
import render from './render';

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
