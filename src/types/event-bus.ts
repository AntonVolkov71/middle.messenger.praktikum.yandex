export type Callback = () => void

export interface Listeners {
	[key: string]: Callback[]
}
