import './style.scss';
import tpl from './tpl';
import Component from '../../../services/Component';

class Main extends Component {
  render() {
    return this.compile(tpl);
  }
}

export default Main;
