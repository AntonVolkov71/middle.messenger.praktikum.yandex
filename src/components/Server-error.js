import ServerError from '../templates/partials/server-error';

const serverError = (props) => new ServerError(
  'div',
  {
    ...props,
    attr: {
      class: 'server-error',
    },
  },
);

export default serverError;
