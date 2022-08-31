export enum WebsocketEvents {
	CONNECTION = 'connection',
	CLOSE = 'close',
	ERROR = 'error',
	MESSAGE = 'message',
}

type PingPongType = 'pong' | 'ping';

export interface PingPong {
	type: PingPongType
}

export enum TypeMessage {
	MESSAGE = 'message',
	FILE = 'file',
	PING = 'ping',
	PONG = 'pong',
	GET_OLD = 'get old'
}
