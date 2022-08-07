import Auth from '../templates/pages/auth';
import isValidation from '../utils/isValidation';
import ValidationTypes from '../types/validation';

const parseValidFocusBlur = (e) => {
  const { name, value } = e.target;
  const $errorText = e.target.parentNode.querySelector(`.form__error_${name}`);

  if (name === 'password_repeat') {
    const firstPassword = e.target.parentNode.password.value;

    value === firstPassword
      ? $errorText.classList.add('hidden')
      : $errorText.classList.remove('hidden');
  } else {
    const isValid = isValidation(name, value);

    isValid
      ? $errorText.classList.add('hidden')
      : $errorText.classList.remove('hidden');
  }
};

const isValidForm = (fields) => {
  const {
    password,
    passwordRepeat,
    login,
    phone,
    email,
    firstName,
    secondName,
  } = fields;

  return isValidation(ValidationTypes.password, password)
		&& isValidation(ValidationTypes.password, passwordRepeat)
		&& isValidation(ValidationTypes.login, login)
		&& isValidation(ValidationTypes.phone, phone)
		&& isValidation(ValidationTypes.email, email)
		&& isValidation(ValidationTypes.first_name, firstName)
		&& isValidation(ValidationTypes.second_name, secondName)
		&& password === passwordRepeat;
};

const auth = (props) => new Auth('div', {
  ...props,
  events: {
    linkToLogin: (e) => {
      e.preventDefault();
      e.stopPropagation();

      const { href } = e.target;
      window.location.href = href;
    },
    submit: (e) => {
      e.preventDefault();
      const form = e.target;
      const fields = {
        password: form[ValidationTypes.password].value,
        passwordRepeat: form[ValidationTypes.password_repeat].value,
        login: form[ValidationTypes.login].value,
        phone: form[ValidationTypes.phone].value,
        email: form[ValidationTypes.email].value,
        firstName: form[ValidationTypes.first_name].value,
        secondName: form[ValidationTypes.second_name].value,
      };

      const isValidAllFields = isValidForm(fields);
      const $errorText = e.target.querySelector('.form__error_form');

      isValidAllFields
        ? $errorText.classList.add('hidden')
        : $errorText.classList.remove('hidden');
    },
    focus: (e) => {
      parseValidFocusBlur(e);
    },
    blur: (e) => {
      parseValidFocusBlur(e);
    },
  },
  attr: {
    class: 'auth popup',
  },
});

export default auth;
