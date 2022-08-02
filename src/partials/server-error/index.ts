import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('serverError', tpl);

interface ServerErrorProps {
    httpStatus: number;
}

const serverError = (props: ServerErrorProps = {
  httpStatus: 500,
}) => tpl(props);

export default serverError;
