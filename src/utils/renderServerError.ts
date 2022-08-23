import renderer from './renderer';
import serverError from '../components/Server-error';
import EmptyLayout from '../layout/EmptyLayout';

const rootSelector: string = '#root';

const renderServerError = (): void => {
	serverError.setProps({
		httpStatus: 500,
	});

	EmptyLayout.setProps({
		content: serverError,
	});

	renderer(rootSelector, EmptyLayout);
};

export default renderServerError;
