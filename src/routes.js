const express = require("express");
const routes = express.Router();

const ArticleController = require('../src/controllers/WorkListController');

routes.get('/articles', ArticleController.show)

module.exports = routes;