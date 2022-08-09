import OpenProfile from '../templates/components/open-profile';
import { Props } from '../types/component';
import Component from '../services/Component';

const openProfile = (clb: { (isOpenProfile: boolean): void }, props: Props = {}): Component => {
	let isOpenProfile: boolean = false;

	return new OpenProfile(
		'div',
		{
			...props,
			events: {
				click: (e: PointerEvent) => {
					e.preventDefault();
					clb(isOpenProfile);

					isOpenProfile = !isOpenProfile;
				},
			},
			attr: {
				class: 'openProfile',
			},
		},
	);
};

export default openProfile;
