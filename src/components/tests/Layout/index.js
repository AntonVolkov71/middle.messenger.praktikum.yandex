import tpl from './tpl';
import Component from '../../../services/Component';
import Nav from '../Nav';
// import Nav from "../Nav";

export default class Index extends Component {
  /*
	constructor(tag, props = {}) {
		props['nav'] = new Nav(
			'div',
			{
				items: [{url: '/', title: 'Main'}],

				events: {
					click: e => {
						const t = e.target
						if (t && t.getAttribute('href')) {
							console.log('Nav link clicked',);
							e.preventDefault()
							e.stopPropagation()
						}
					}
				}
			}
		)

		super(tag, props)
	}

   */

  // componentDidUpdate(oldProps, newProps) {
  //   return oldProps.title !== newProps.title;
  // }

  render() {
    console.log('layout render');
    return this.compile(tpl);
  }
}
