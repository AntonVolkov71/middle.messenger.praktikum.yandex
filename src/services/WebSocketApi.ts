import EventBus from './Event-bus';
import { TypeMessage, WebsocketEvents } from '../types/websocket';

class WebSocketApi extends EventBus {
	static __instance: WebSocketApi;

	private socket: WebSocket;

	private isOpen: boolean = false;

	private timeId: ReturnType<typeof setTimeout>;

	private readonly TIMEOUT: number = 1000;

	constructor() {
		super();

		if (WebSocketApi.__instance) {
			return WebSocketApi.__instance;
		}

		WebSocketApi.__instance = this;
	}

	public start(url: string) {
		if (this.isOpen) {
			clearTimeout(this.timeId);
			this.socket.close();
		}

		this.socket = new WebSocket(url);

		this.isOpen = true;
		this.eventsListener();
		this.checkConnection();
	}

	// TODO delete any
	public sendMessage(content: any, type: TypeMessage) {
		this.socket.send(JSON.stringify({
			content,
			type,
		}));
	}

	private eventsListener() {
		this.openListener();
		this.closeListener();
		this.errorListener();
		this.messageListener();
	}

	private openListener() {
		this.socket.addEventListener('open', () => {
			this.emit(WebsocketEvents.CONNECTION, 'Соединение установлено');
		});
	}

	// TODO delete any
	private messageListener() {
		this.socket.addEventListener('message', (event: MessageEvent<any>) => {
			this.emit(WebsocketEvents.MESSAGE, event.data);
		});
	}

	private closeListener() {
		this.socket.addEventListener('close', (event: CloseEvent) => {
			if (event.wasClean) {
				this.emit(WebsocketEvents.CLOSE, 'Соединение закрыто чисто');
			} else {
				this.emit(WebsocketEvents.CLOSE, 'Обрыв соединения');
			}
			this.emit(WebsocketEvents.CLOSE, `Код: ${event.code} | Причина: ${event.reason}`);
		});
	}

	private errorListener() {
		this.socket.addEventListener('error', () => {
			this.emit(WebsocketEvents.ERROR, 'Ошибка соединения');
		});
	}

	public checkConnection() {
		const self = this;
		this.timeId = setTimeout(function tick() {
			self.sendMessage('', TypeMessage.PING);
			self.timeId = setTimeout(tick, self.TIMEOUT);
		}, self.TIMEOUT);
	}
}

export default WebSocketApi;
