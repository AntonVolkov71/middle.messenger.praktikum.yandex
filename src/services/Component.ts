import {v4 as makeUUID} from 'uuid';
// @ts-ignore
import Handlebars from 'handlebars';
import EventBus from './Event-bus';
import {EventsEnum, Meta, Props, PropsAndChilds} from "../types/component";


// TODO ignore Handlebars


class Component {
	static EVENT_INIT: EventsEnum = EventsEnum.EVENT_INIT;
	static EVENT_FLOW_CDM: EventsEnum = EventsEnum.EVENT_FLOW_CDM;
	static EVENT_FLOW_CDU: EventsEnum = EventsEnum.EVENT_FLOW_CDU;
	static EVENT_FLOW_RENDER: EventsEnum = EventsEnum.EVENT_FLOW_RENDER;

	private setUpdate: boolean = false;
	private eventBus: EventBus;
	private id: string = makeUUID();

	protected element: HTMLElement | null;
	protected props: Props;
	private readonly children: Component;
	private meta: Meta;

	constructor(tag: string = 'div', propsAndChilds: PropsAndChilds = {}) {
		const {children, props} = this.getChildren(propsAndChilds);

		this.eventBus = new EventBus();
		this.children = this.makePropsProxy(children);
		this.props = this.makePropsProxy({...props, __id: this.id});
		this.meta = {tag, props};

		this.registerEvents();
		this.eventBus.emit(Component.EVENT_INIT);
	}

	registerEvents(): void {
		this.eventBus.on(Component.EVENT_INIT, this.init.bind(this));
		this.eventBus.on(Component.EVENT_FLOW_CDM, this._componentDidMount.bind(this));
		this.eventBus.on(Component.EVENT_FLOW_CDU, this._componentDidUpdate.bind(this));
		this.eventBus.on(Component.EVENT_FLOW_RENDER, this._render.bind(this));
	}

	init(): void {
		this.element = this.createDocumentElement(this.meta?.tag);
		console.log('this.element', this.element);
		this.eventBus.emit(Component.EVENT_FLOW_RENDER);
	}

	createDocumentElement(tag: string) {
		const element: HTMLElement = document.createElement(tag);
			if (this.props.settings && 'withInternalID' in this.props.settings) {
				element.setAttribute('data-id', this.id);
			}
		

		return element;
	}

	_render(): void {
		const block: Node | null = this.render();
		this.removeEvents();
		if (this.element) {
			this.element.innerHTML = '';
		}

		if (block) {
			if (this.element) {
				this.element.appendChild(block);
			}
		}

		this.addEvents();
		this.addAttribute();
	}

	render() {
		return null
	}

	addEvents() {
		const {events = {}} = this.props;

		Object.keys(events).forEach((eventName) => {
			if (this.element) {
				this.element.addEventListener(eventName, events[eventName]);
			}
		});
	}

	removeEvents(): void {
		const {events = {}} = this.props;

		Object.keys(events).forEach((eventName) => {
			if (this.element) {
				this.element.removeEventListener(eventName, events[eventName]);
			}
		});
	}

	addAttribute() {
		const {attr = {}} = this.props;

		Object.entries(attr).forEach(([key, value]: [key: string, value: string]) => {
			if (this.element) {
				this.element.setAttribute(key, value);
			}
		});
	}

	getChildren(propsAndChilds: PropsAndChilds) {
		console.log('getChildren', propsAndChilds);
		const children = {};
		const props: Props = {};

		Object.keys(propsAndChilds).forEach((key: string) => {
			if (propsAndChilds[key] instanceof Component) {
				children[key] = propsAndChilds[key];
			} else {
				props[key] = propsAndChilds[key];
			}
		});

		return {children, props};
	}

	compile(template, props) {
		console.log('compile',);

		if (typeof (props) === 'undefined') {
			props = this.props;
		}

		const propsAndStubs = {...props};

		Object.entries(this.children).forEach(([key, child]: [key: string, child: Component]) => {
			propsAndStubs[key] = `<div data-id="${child.id}"></div>`;
		});

		const fragment: HTMLElement = this.createDocumentElement('template');
		fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

		Object.values(this.children).forEach((child: Component) => {
			const stub = fragment['content'].querySelector(`[data-id="${child.id}"]`);

			if (stub) {
				const content = child.getContent();
				if(content){
					stub.replaceWith(content);
				}
			}
		});

		return fragment['content'];
	}

	_componentDidMount() {
		this.componentDidMount();

		Object.values(this.children).forEach((child: Component) => {
			child.dispatchComponentDidMount();
		});
	}

	componentDidMount() {

	}

	dispatchComponentDidMount() {
		this.eventBus.emit(Component.EVENT_FLOW_CDM);

		if (Object.keys(this.children).length) {
			this.eventBus.emit(Component.EVENT_FLOW_RENDER);
		}
	}

	_componentDidUpdate(oldProps, newProps) {
		const isRenderer = this.componentDidUpdate(oldProps, newProps);

		if (isRenderer) {
			this.eventBus.emit(Component.EVENT_FLOW_RENDER);
		}
	}

	componentDidUpdate(oldProps, newProps) {
		return true;
	}

	show(): void {
		const content = this.getContent();
		if(content){
			content.style.display = 'block';
		}
	}

	hide(): void {
		const content = this.getContent();
		if(content){
			content.style.display = 'none';
		}
	}

	getContent(): HTMLElement | null {
		return this.element;
	}

	setProps(newProps: Props): void {
		if (!newProps) {
			return;
		}

		this.setUpdate = false;
		const oldValue: Props = {...this.props};

		const {children, props} = this.getChildren(newProps);

		if (Object.values(children).length) {
			Object.assign(this.children, children);
		}

		if (Object.values(props).length) {
			Object.assign(this.props, props);
		}

		if (this.setUpdate) {
			this.eventBus.emit(Component.EVENT_FLOW_CDU, oldValue, this.props);
			this.setUpdate = false;
		}
	}

	makePropsProxy(props) {
		const self = this;

		return new Proxy(props, {
			get(target, prop: keyof typeof props) {
				const value = target[prop];

				return typeof value === 'function' ? value.bind(target) : value;
			},

			set(target, prop: keyof typeof props, value): boolean {
				if (target[prop] !== value) {
					target[prop] = value;
					self.setUpdate = true;
				}

				return true;
			},
		});
	}
}

export default Component;
