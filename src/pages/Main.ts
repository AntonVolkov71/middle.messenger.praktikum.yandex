import Main from '../templates/pages/main';
import {Props} from "../types/component";
import Component from "../services/Component";

const main = (props: Props = {}): Component => new Main('div', {
	...props,
	attr: {
		'class': 'main',
	},
});

export default main;
