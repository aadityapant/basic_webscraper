const express = require('express');
const route = require('./controller/routeController');

const app = express();

app.use(express.json());

app.route('/').get(route.getReturn);
app.route('/').post(route.scrape);

module.exports = app;
