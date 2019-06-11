const express = require("express");
const routes = express.Router();

const ArticleController = require('../src/controllers/WorkListController');

routes.get('/phisics', ArticleController.phisics)
routes.get('/biology', ArticleController.biology)
routes.get('/chemistry', ArticleController.chemistry)

module.exports = routes;