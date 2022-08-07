import Profile from '../templates/components/profile';
import isValidation from '../utils/isValidation';
import ValidationTypes from '../types/validation';
import { existUsers } from '../assets/mock-data';

const parseValidFocusBlur = (e) => {
  const { name, value } = e.target;
  const $form = e.target.parentNode.parentNode;
  const $errorText = $form.querySelector('.form__error_change-password');
  let errorText = '';

  if (name === ValidationTypes.password_repeat) {
    const $firstPassword = $form.querySelector('#profile-password_new');
    value === $firstPassword.value
      ? errorText = ''
      : errorText = 'Пароли не совпадают';
  }

  if (name === ValidationTypes.password_old) {
    const isValid = isValidation(ValidationTypes.password, value);
    const isEqualPassword = existUsers[0].password === value;

    isValid && isEqualPassword
      ? errorText = ''
      : errorText = 'Старый пароль не такой как был вчера';
  }

  if (name === ValidationTypes.password_new) {
    const isValid = isValidation(ValidationTypes.password, value);
    isValid
      ? errorText = ''
      : errorText = 'Пароль должен состоять из одной заглавной буквы и цифры, длина от 8 до 40 символов';
  }

  if (name === ValidationTypes.email) {
    const isValid = isValidation(ValidationTypes.email, value);
    isValid
      ? errorText = ''
      : errorText = 'Email не настоящий';
  }

  if (name === ValidationTypes.login) {
    const isValid = isValidation(ValidationTypes.login, value);
    isValid
      ? errorText = ''
      : errorText = 'Логин должен содержать цифры (но полностью не состоять из них), буквы, длина от 3 до 20 символов';
  }

  if (name === ValidationTypes.first_name) {
    const isValid = isValidation(ValidationTypes.first_name, value);
    isValid
      ? errorText = ''
      : errorText = 'Первая заглавная, без пробелов и без цифр, можно добавить дефис';
  }

  if (name === ValidationTypes.second_name) {
    const isValid = isValidation(ValidationTypes.second_name, value);
    isValid
      ? errorText = ''
      : errorText = 'Первая заглавная, без пробелов и без цифр, можно добавить дефис';
  }

  if (name === ValidationTypes.name_in_chat) {
    const isValid = isValidation(ValidationTypes.login, value);
    isValid
      ? errorText = ''
      : errorText = 'Первая заглавная, без пробелов и без цифр, можно добавить дефис';
  }

  if (name === ValidationTypes.phone) {
    const isValid = isValidation(ValidationTypes.phone, value);
    isValid
      ? errorText = ''
      : errorText = 'Начинаться должен с + либо 8, от 10 до 15 цифр, без скобок';
  }

  $errorText.textContent = errorText;
};

const isValidFormSavePassword = (fields) => {
  const {
    passwordOld,
    passwordNew,
    passwordRepeat,
  } = fields;

  return isValidation(ValidationTypes.password, passwordNew)
		&& isValidation(ValidationTypes.password, passwordRepeat)
		&& passwordNew === passwordRepeat
		&& passwordOld !== passwordNew;
};

const isValidFormSaveData = (fields) => {
  const {
    email,
    login,
    firstName,
    secondName,
    nameInChat,
    phone,
  } = fields;

  return isValidation(ValidationTypes.email, email)
		&& isValidation(ValidationTypes.first_name, firstName)
		&& isValidation(ValidationTypes.login, login)
		&& isValidation(ValidationTypes.second_name, secondName)
		&& isValidation(ValidationTypes.login, nameInChat)
		&& isValidation(ValidationTypes.phone, phone);
};

const profile = (props, elements) => new Profile('div', {
  ...props,
  events: {
    changeProfile: (e) => {
      const profileElement = elements.getProfile();
      profileElement.setProps({ isShow: false });
    },
    changePassword: (e) => {
      const profileElement = elements.getProfile();
      profileElement.setProps({
        isShow: false,
        changePassword: true,
        oldPassword: 'A1245678',
      });
    },
    exitProfile: (e) => {
      e.preventDefault();
      console.info('exitProfile');
    },
    savePassword: (e) => {
      e.preventDefault();
      const $form = e.target.parentNode.parentNode;
      const fields = {
        passwordOld: existUsers[0].password,
        passwordNew: $form.querySelector('#profile-password_new').value,
        passwordRepeat: $form.querySelector('#profile-password_new').value,
      };

      const isValidAllFields = isValidFormSavePassword(fields);
      const $errorText = $form.querySelector('.form__error_change-password');
      let errorText = '';

      if (isValidAllFields) {
        errorText = '';
        console.info('savePassword', fields);
      } else {
        errorText = 'Ничего не угадал';
      }

      $errorText.textContent = errorText;
    },
    saveProfileData: (e) => {
      e.preventDefault();
      const $form = e.target;
      const fields = {
        email: $form[ValidationTypes.email].value,
        login: $form[ValidationTypes.login].value,
        firstName: $form[ValidationTypes.first_name].value,
        secondName: $form[ValidationTypes.second_name].value,
        nameInChat: $form[ValidationTypes.name_in_chat].value,
        phone: $form[ValidationTypes.phone].value,
      };

      const isValidAllFields = isValidFormSaveData(fields);
      const $errorText = $form.querySelector('.form__error_change-password');
      let errorText = '';

      if (isValidAllFields) {
        errorText = '';
        console.info('changeProfileData', fields);
      } else {
        errorText = 'Некорректные заполненные поля';
      }

      $errorText.textContent = errorText;
    },
    changeAvatar: (e) => {
      const profileElement = elements.getProfile();
      const inputFileElement = elements.getInputFile();
      inputFileElement.setProps({
        titleError: 'Ошибка, попробуйте еще разок',
      });
      profileElement.setProps({
        isShow: true,
        inputFile: inputFileElement,
      });
    },
    focus: (e) => {
      parseValidFocusBlur(e);
    },
    blur: (e) => {
      parseValidFocusBlur(e);
    },
  },
  attr: {
    class: 'profile',
  },
});

export default profile;
