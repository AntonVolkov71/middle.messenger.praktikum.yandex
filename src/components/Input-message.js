import InputMessage from '../templates/components/input-message';

const inputMessage = (props) => new InputMessage(
  'div',
  {
    ...props,
    events: {
      sendMessage: (e) => {
        e.preventDefault();
        const $form = e.target;
        const message = ($form.message).value;
        console.info('message', message);
      },
    },
    attr: {
      class: 'inputMessage',
    },
  },
);

export default inputMessage;
