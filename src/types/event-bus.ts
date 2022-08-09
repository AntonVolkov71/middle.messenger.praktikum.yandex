export type Callback = (e?: any) => void

export interface Listeners {
	[key: string]: Callback[]
}
