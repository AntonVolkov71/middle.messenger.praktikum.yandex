const express = require('express');
const path = require('path');

const defaultPort = 3333;
const staticDir = path.resolve('dist');
const htmlFile = 'index.html';

const app = express();
app.use(express.static(staticDir));

app.use('*', (req, res) => {
  res.sendFile(`${staticDir}/${htmlFile}`);
});

app.listen(defaultPort, () => {
  console.info(`App start on PORT ${defaultPort}`);
});
