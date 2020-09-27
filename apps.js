const express = require('express');
const route = require('./controller/routeController');

const app = express();

app.use(express.json());

app.route('/').post(route);

module.exports = app;
