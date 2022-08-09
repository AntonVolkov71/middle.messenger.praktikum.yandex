export enum METHOD {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	PATCH = 'PATCH',
	DELETE = 'DELETE'
}

export type Options = {
	method: METHOD;
	data?: any;
};

export type OptionsWithoutMethod = Omit<Options, 'method'>;
