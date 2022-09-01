import Store from '../Store';

const store: Store = new Store();

export const addError = (value: string): void => {
	store.setState('auth.error', value);
};
