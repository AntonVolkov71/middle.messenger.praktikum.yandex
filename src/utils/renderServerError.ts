import renderer from './renderer';
import serverError from '../components/Server-error';
import layout from '../layout/Layout';
import Component from '../services/Component';

const rootSelector: string = '#root';

function renderServerError(): void {
	const emptyLayout: Component = layout({ attr: { class: 'empty-layout' } });

	emptyLayout.setProps({
		content: serverError({
			httpStatus: 500,
		}),
	});

	renderer(rootSelector, emptyLayout);
}

export default renderServerError;
