import set from '@utils/myDash/set';
import cloneDeep from '@utils/myDash/clon-deep';
import { State, StoreEvents } from '@myTypes/state';
import EventBus from '@services/Event-bus';
import initialState from './initial-state';

class Store extends EventBus {
	static instance: Store;

	private state: State = cloneDeep(initialState);

	constructor() {
		super();

		if (Store.instance) {
			return Store.instance;
		}

		Store.instance = this;
	}

	public getState(): State {
		return this.state;
	}

	public setState(path: string, value: unknown) {
		set(this.state, path, value);
		this.emit(StoreEvents.UPDATED);
	}

	public removeState() {
		this.state = {} as State;
		this.emit(StoreEvents.UPDATED);
	}
}

export default Store;
