export function isStatusClientError(status: number): boolean {
	return status.toString()
		.startsWith('4');
}

export function isStatusServerError(status: number): boolean {
	return status.toString()
		.startsWith('5');
}
