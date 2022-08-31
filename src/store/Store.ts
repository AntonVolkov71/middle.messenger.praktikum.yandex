import EventBus from '../services/Event-bus';
import set from '../utils/myDash/set';
import { State, StoreEvents } from '../types/state';
import cloneDeep from '../utils/myDash/clon-deep';
import initialState from './initial-state';

class Store extends EventBus {
	static __instance: Store;

	private state: State = cloneDeep(initialState);

	constructor() {
		super();

		if (Store.__instance) {
			return Store.__instance;
		}

		Store.__instance = this;
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
