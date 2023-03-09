const express = require('express');
const routes = express.Router();
basePath = __dirname + "/views";

routes.get('/', (request, response) => response.sendFile(basePath + "/home.html"))
routes.get('/main.html', (request, response) => response.sendFile(basePath + "/main.html"))


module.exports = routes;