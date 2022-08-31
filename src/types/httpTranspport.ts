export enum Method {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	PATCH = 'PATCH',
	DELETE = 'DELETE'
}

export interface Headers {
	[key: string]: string;
}

export interface Options {
	data?: any;
	headers: Headers,
	withCredentials?: boolean,
}

export interface RequestOptions extends Options {
	method: Method;
}

export type OptionsWithoutMethod = Omit<Options, 'method'>;
