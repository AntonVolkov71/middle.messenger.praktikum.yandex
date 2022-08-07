import Main from '../templates/pages/main';

const main = (props) => new Main('div', {
  ...props,
  attr: {
    class: 'main',
  },
});

export default main;
