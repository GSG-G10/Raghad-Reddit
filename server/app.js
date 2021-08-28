require('env2')('./config.env');
const { join } = require('path');
const express = require('express');
const compression = require('compression');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.disabled('x-powered-by');
app.set('port', process.env.PORT || 8080);

app.use(express.static(join(__dirname, '..', 'public')));

module.exports = app;
