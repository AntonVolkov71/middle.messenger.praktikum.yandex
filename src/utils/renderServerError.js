import renderer from './renderer';
import serverError from "../components/Server-error";
import layout from "../layout/Layout";

const rootSelector = '#root';

function renderServerError() {
	const emptyLayout = layout({attr: {'class': 'empty-layout'}})

	emptyLayout.setProps({
		content:serverError({
			httpStatus: 500,
		})
	})
	
	renderer(rootSelector, emptyLayout);
}

export default renderServerError;
