import Handlebars from 'handlebars';
import tpl from './tpl';
import './style.scss';
import Component from '../../../services/Component';

Handlebars.registerPartial('emptyChat', tpl);

class EmptyChats extends Component {
  render() {
    return this.compile(tpl);
  }
}

export default EmptyChats;
