import InputMessage from '../templates/components/input-message';

const inputMessage = (props = {}, clb) => new InputMessage(
  'div',
  {
    ...props,
    events: {
      sendMessage: (e) => {
        e.preventDefault();
        const $form = e.target;
        const $message = $form.message;
        const message = $message.value;
        clb(message);

        $message.value = '';
      },
    },
    attr: {
      class: 'inputMessage',
    },
  },
);

export default inputMessage;
