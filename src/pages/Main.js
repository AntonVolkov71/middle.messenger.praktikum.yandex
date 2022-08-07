import Main from "../templates/pages/main";

const main = (props) => {

	return new Main(
		'div', {
			...props,
			attr: {
				'class': 'main'
			}
		}
	);
}

export default main;
