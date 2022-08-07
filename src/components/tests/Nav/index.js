import tpl from './tpl';
import Component from '../../../services/Component';

export default class Nav extends Component {
  render() {
    console.log('Nav render');

    return this.compile(tpl);
  }

  addEvents() {
    this._element.querySelectorAll('a').forEach((a) => {
      /* a.addEventListener('click', (e) => {
				e.preventDefault();
				e.stopPropagation();
				console.log('Link clicked',);
			})
			 */
      a.addEventListener('click', this._props.events.click);
    });

    // super.addEvents()
  }
}
