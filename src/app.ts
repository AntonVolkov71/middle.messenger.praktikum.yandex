import * as EXPRESS from 'express';
import * as PATH from 'path';

const DEFAULT_PORT: number = 3000;
const STATIC_DIR: string = PATH.resolve('dist');
const HTML_FILE: string = 'index.html';

const app: EXPRESS.Application = EXPRESS();
app.use(EXPRESS.static(STATIC_DIR));

app.use('*', (_: EXPRESS.Request, res: EXPRESS.Response) => {
	res.sendFile(`${STATIC_DIR}/${HTML_FILE}`);
});

app.listen(DEFAULT_PORT, () => {
	console.info(`App start on PORT ${DEFAULT_PORT}`);
});
