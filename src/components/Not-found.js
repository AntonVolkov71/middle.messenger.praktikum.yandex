import NotFound from '../templates/components/not-found';

const notFound = (props) => new NotFound(
  'div',
  {
    ...props,
    events: {
      linkToLogin: (e) => {
        e.preventDefault();
        e.stopPropagation();

        const { href } = e.target;
        window.location.href = href;
      },
    },
    attr: {
      class: 'notFound',
    },
  },
);

export default notFound;
