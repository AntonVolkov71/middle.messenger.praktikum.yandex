function cloneDeep<T extends object = object>(obj: T) {
	const copy = JSON.parse(JSON.stringify(obj)) as typeof obj;

	return copy;
}

export default cloneDeep;
