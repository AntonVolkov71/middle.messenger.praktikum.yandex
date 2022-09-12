import { Callback, Listeners } from '@myTypes/event-bus';

class EventBus {
	private listeners: Listeners = {};

	on(event: string, callback: Callback): void {
		if (!this.listeners[event]) {
			this.listeners[event] = [];
		}

		this.listeners[event]?.push(callback);
	}

	off(event: string, callback: Callback): void {
		if (!this.listeners[event]) {
			throw new Error(`Нет события: ${event}`);
		}

		this.listeners[event] = this.listeners[event]?.filter(
			(listener) => listener !== callback,
		) || [];
	}

	emit(event: string, ...args: any[]): void {
		if (!this.listeners[event]) {
			throw new Error(`Нет события: ${event}`);
		}

		this.listeners[event]?.forEach((listener) => {
			listener(...args);
		});
	}
}

export default EventBus;
