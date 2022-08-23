import LocalePaths from "../types/constants";

export const LOCALE_PATHS: LocalePaths = {
	login: '/login',
	auth: '/auth',
	main: '/main',
	empty: '/',
};

export const TEXT_ERROR = {
	noValidLogin: 'Логин должен содержать цифры (но полностью не состоять из них), буквы, длина от 3 до 20 символов',
	noValidPassword: 'Пароль должен состоять из одной заглавной буквы и цифры, длина от 8 до 40 символов',
	noValidPasswordRepeat: 'Не совпадают',
	noValidFirstSecondName: 'Первая заглавная, без пробелов и без цифр, можно добавить дефис',
	noValidNameInChat: 'Имя в чате должно содержать цифры (но полностью не состоять из них), буквы, длина от 3 до 20 символов',
	noValidPhone: 'Начинаться должен с + либо 8, от 10 до 15 цифр, без скобок',
	noValidEmail: 'Email не настоящий',
	noValidPasswordOld: 'А ты ли это? Не угадал старенький паролик',
};
