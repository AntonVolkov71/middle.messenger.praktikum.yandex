"use strict";
exports.__esModule = true;
var express = require("express");
var PATH = require("path");
var DEFAULT_PORT = 3000;
var STATIC_DIR = PATH.resolve('dist');
var HTML_FILE = 'index.html';
var app = express();
app.use(express.static(STATIC_DIR));
app.use('*', function (_, res) {
    res.sendFile("".concat(STATIC_DIR, "/").concat(HTML_FILE));
});
app.listen(DEFAULT_PORT, function () {
    console.info("App start on PORT ".concat(DEFAULT_PORT));
});
