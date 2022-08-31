import render from './render';
import serverError from '../display-components/components/Server-error';
import EmptyLayout from '../display-components/layout/propsEmptyLayout';

const rootSelector: string = '#root';

const renderServerError = (): void => {
	serverError.setProps({
		httpStatus: 500,
	});

	EmptyLayout.setProps({
		content: serverError,
	});

	render(rootSelector, EmptyLayout);
};

export default renderServerError;
