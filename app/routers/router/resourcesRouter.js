
const Router = require('koa-router');
const resourcesController = require('../../controllers/resourcesController')

let resourcesRouter = new Router();

resourcesRouter
  .post('/upload/image', resourcesController.Carousel)

module.exports = resourcesRouter;
