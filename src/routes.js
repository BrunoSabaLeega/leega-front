const express = require('express');
const routes = express.Router();
basePath = __dirname + "/views";

routes.get('/', (request, response) => response.sendFile(basePath + "/main.html"))
routes.get('/main.html', (request, response) => response.sendFile(basePath + "/main.html"))
routes.get('/login.html', (request, response) => response.sendFile(basePath + "/login.html"))
routes.get('/admin.html', (request, response) => response.sendFile(basePath + "/admin.html"))


module.exports = routes;