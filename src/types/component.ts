import Component from '../services/Component';

export enum EventsEnum {
	EVENT_INIT = 'init',
	EVENT_FLOW_CDM = 'flow:component-did-mount',
	EVENT_FLOW_CDU = 'flow:component-did-update',
	EVENT_FLOW_RENDER = 'flow:render',
}

export interface Children {
	[key: string]: Component
}

interface Events {
	[key: string]: () => void
}

type PropsTypes = Events | Children | any

export interface Props {
	[key: string]: PropsTypes
}

export type PropsAndChilds = Children | Props

export interface Meta {
	tag: string;
	props: Props
}
