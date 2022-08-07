import './style.scss';
import tpl from './tpl';

import Component from '../../../services/Component';

class Layout extends Component {
  constructor(props) {
    super('div', props);
  }

  componentDidUpdate(oldProps, newProps) {
	   return JSON.stringify(oldProps) !== JSON.stringify(newProps);
  }

  render() {
    return this.compile(tpl);
  }
}

export default Layout;
