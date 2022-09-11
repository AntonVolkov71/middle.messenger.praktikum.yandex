import { expect } from 'chai';
import { StoreEvents } from '@myTypes/state';
import Store from './Store';

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
