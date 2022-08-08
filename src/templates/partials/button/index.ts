import * as Handlebars from 'handlebars';
import tpl from './tpl';
import './style.scss';
import Component from '../../../services/Component';

Handlebars.registerPartial('button', tpl);

class Button extends Component {
  render() {
    return this.compile(tpl);
  }
}

export default Button;
