// import EventBus from './Event-bus';
// import { TypeMessage, WebsocketEvents } from '../types/websocket';
// import message from '../partials/message';
//
// class WebsocketChat extends EventBus {
// 	static __instance: WebsocketChat;
//
// 	private socket: WebSocket;
//
// 	private isOpen: boolean = false;
//
// 	private timeId: ReturnType<typeof setTimeout>;
//
// 	private readonly TIMEOUT: number = 2000;
//
// 	constructor() {
// 		super();
//
// 		if (WebsocketChat.__instance) {
// 			console.log('__instance', this.isOpen);
// 			return WebsocketChat.__instance;
// 		}
//
// 		WebsocketChat.__instance = this;
// 	}
//
// 	public start(url: string) {
// 		if (this.isOpen) {
// 			clearTimeout(this.timeId);
// 			this.socket.close();
// 		}
//
// 		this.socket = new WebSocket(url);
// 		this.socket.addEventListener('open', () => {
// 			console.log('webscoketchat',);
// 		});
//
// 		this.socket.addEventListener('message', (event: MessageEvent<any>) => {
// 			console.log('webscoketchat message',message);
// 		});
//
// 		setTimeout(()=>{
// 			this.sendMessage("0", TypeMessage.GET_OLD)
// 		}, 2000)
// 		// this.isOpen = true;
// 		// this.eventsListener();
// 		// this.checkConnection();
// 	}
//
// 	// TODO delete any
// 	public sendMessage(content: any, type: TypeMessage) {
// 		this.socket.send(JSON.stringify({
// 			content,
// 			type,
// 		}));
// 	}
//
// 	private eventsListener() {
// 		this.openListener();
// 		this.closeListener();
// 		this.errorListener();
// 		this.messageListener();
// 	}
//
// 	private openListener() {
// 		this.socket.addEventListener('open', () => {
// 			this.emit(WebsocketEvents.CONNECTION, 'Соединение установлено');
// 		});
// 	}
//
// 	// TODO delete any
// 	private messageListener() {
// 		this.socket.addEventListener('message', (event: MessageEvent<any>) => {
// 			this.emit(WebsocketEvents.MESSAGE, event.data);
// 		});
// 	}
//
// 	private closeListener() {
// 		this.socket.addEventListener('close', (event: CloseEvent) => {
// 			if (event.wasClean) {
// 				this.emit(WebsocketEvents.CLOSE, 'Соединение закрыто чисто');
// 			} else {
// 				this.emit(WebsocketEvents.CLOSE, 'Обрыв соединения');
// 			}
// 			this.emit(WebsocketEvents.CLOSE, `Код: ${event.code} | Причина: ${event.reason}`);
// 		});
// 	}
//
// 	private errorListener() {
// 		this.socket.addEventListener('error', () => {
// 			this.emit(WebsocketEvents.ERROR, 'Ошибка соединения');
// 		});
// 	}
//
// 	public checkConnection() {
// 		const self = this;
// 		this.timeId = setTimeout(function tick() {
// 			self.sendMessage('', TypeMessage.PING);
// 			self.timeId = setTimeout(tick, self.TIMEOUT);
// 		}, self.TIMEOUT);
// 	}
// }
//
// export default WebsocketChat;
