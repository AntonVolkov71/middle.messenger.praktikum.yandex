import isEqualByValue from '@utils/myDash/isEqualByValue';
import render from '@utils/render';
import LayoutElement from '@layout/Layout';
import { Props } from '@myTypes/component';
import Component from '@services/Component';

class Route {
	private _pathname: string = '';

	private readonly _tag: string = 'div';

	private readonly _blockClass: typeof LayoutElement;

	private _block: null | Component = null;

	private readonly _props: Props = {} as Props;

	constructor(pathname: string, view: typeof LayoutElement, tag: string, props: Props) {
		this._pathname = pathname;
		this._blockClass = view;
		this._block = null;
		this._props = props;
		this._tag = tag ?? this._tag;
	}

	navigate(pathname: string) {
		if (this.match(pathname)) {
			this._pathname = pathname;
			this.render();
		}
	}

	leave() {
		if (this._block) {
			this._block.hide();
		}
	}

	match(pathname: string) {
		return isEqualByValue(pathname, this._pathname);
	}

	render() {
		if (!this._block) {
			this._block = new this._blockClass(this._tag, this._props);
			if (this._block !== null) {
				render(this._props.rootQuery, this._block);

				return;
			}
		}

		if (this._block !== null) {
			this._block.show();
		}
	}
}

export default Route;
