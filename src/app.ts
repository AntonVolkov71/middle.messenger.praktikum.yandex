import * as express from "express";
import * as path from 'path';

const defaultPort: number = 3000;
const staticDir: string = path.resolve('dist');
const htmlFile: string = 'index.html';

const app: express.Application = express();
app.use(express.static(staticDir));

app.use('*', (_: express.Request, res: express.Response) => {
	res.sendFile(`${staticDir}/${htmlFile}`);
});

app.listen(defaultPort, () => {
	console.info(`App start on PORT ${defaultPort}`);
});
