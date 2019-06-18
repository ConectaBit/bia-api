const express = require("express");
const routes = express.Router();

const ArticleController = require("../src/controllers/WorkListController");

routes.get("/phisics/:start", ArticleController.phisics);
routes.get("/biology/:start", ArticleController.biology);
routes.get("/chemistry/:start", ArticleController.chemistry);
routes.get("/mathematics/:start", ArticleController.mathematics);

module.exports = routes;
