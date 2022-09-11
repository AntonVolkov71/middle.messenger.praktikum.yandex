import LayoutElement from '@layout/Layout';
import { Props } from '@myTypes/component';
import Route from './Route';

class Router {
	static __instance: Router;

	private routes: Route[] = [];

	private history: History = {} as History;

	private _currentRoute: Route | null = null;

	private readonly _rootQuery: string = '';

	private readonly pathNotFound: string = '/';

	constructor(rootQuery: string, pathNotFound:string) {
		if (Router.__instance) {
			return Router.__instance;
		}

		this.routes = [];
		this.history = window.history;
		this._currentRoute = null;
		this._rootQuery = rootQuery;
		this.pathNotFound = pathNotFound;
		Router.__instance = this;
	}

	use(pathname: string, block: typeof LayoutElement, tag: string, props: Props) {
		const route = new Route(pathname, block, tag, {
			...props,
			rootQuery: this._rootQuery,
		});
		this.routes.push(route);

		return this;
	}

	start() {
		window.onpopstate = ((event: PopStateEvent) => {
			const currentTarget: Window = event.currentTarget as Window;
			this._onRoute(currentTarget.location.pathname);
		});

		this._onRoute(window.location.pathname);
	}

	private _onRoute(pathname: string) {
		const route = this.getRoute(pathname);

		if (this._currentRoute && this._currentRoute !== route) {
			this._currentRoute.leave();
		}

		if (!route) {
			return;
		}

		this._currentRoute = route;
		route.render();
	}

	go(pathname: string) {
		this.history.pushState({}, '', pathname);
		this._onRoute(pathname);
	}

	back() {
		this.history.back();
	}

	forward() {
		this.history.forward();
	}

	getRoute(pathname: string) {
		const findRoute: Route | undefined = this.routes.find((route) => route.match(pathname));

		if (!findRoute) {
			return this.routes.find((route) => route.match(this.pathNotFound));
		}

		return findRoute;
	}

	public getHistory() {
		return this.history;
	}
}

export default Router;
