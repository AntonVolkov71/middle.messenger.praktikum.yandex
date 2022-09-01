import { expect } from 'chai';
import Store from './Store';
import { StoreEvents } from '../types/state';

describe('Проверяем стор', () => {
	it('Изменение стора', () => {
		const store: Store = new Store();
		const error: string = 'Ошибка для логина';

		store.on(StoreEvents.UPDATED, () => {
			const expectError = store.getState().login.error;

			expect(expectError)
				.to
				.eq(error);
		});

		store.setState('login.error', error);
	});
});
