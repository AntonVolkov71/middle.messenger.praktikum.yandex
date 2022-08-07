import tpl from './tpl';
import Component from '../../../services/Component';

export default class Page extends Component {
  render() {
    console.log('Page render');

    return this.compile(tpl);
  }
}
