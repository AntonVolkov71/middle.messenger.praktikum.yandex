import Store from '@store/Store';

const store: Store = new Store();

export const addError = (value: string): void => {
	store.setState('auth.error', value);
};
