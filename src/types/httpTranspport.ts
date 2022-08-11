export enum Method {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	PATCH = 'PATCH',
	DELETE = 'DELETE'
}

export type Options = {
	method: Method;
	data?: any;
};

export type OptionsWithoutMethod = Omit<Options, 'method'>;
