import Store from '../Store';

const store: Store = new Store();

export const addTitle = (value: string): void => {
	store.setState('inputFile.title', value);
};

export const addSuccessTitle = (value: string): void => {
	store.setState('inputFile.successTitle', value);
};

export const addErrorTitle = (value: string): void => {
	store.setState('inputFile.errorTitle', value);
};

export const addNameFile = (value: string): void => {
	store.setState('inputFile.nameFile', value);
};

export const clearTitle = () => {
	addTitle('Выберите файл');
	addSuccessTitle('');
	addErrorTitle('');
	addNameFile('');
};
