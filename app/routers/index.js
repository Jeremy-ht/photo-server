const Router = require('koa-router');

let Routers = new Router();

const userRouter = require('./router/userRouter');
const resourcesRouter = require('./router/resourcesRouter');
const productRouter = require('./router/productRouter');
const shoppingCartRouter = require('./router/shoppingCartRouter');
const orderRouter = require('./router/orderRouter');
const collectRouter = require('./router/collectRouter');
const addressRouter = require('./router/addressRouter');
const photoRouter = require('./router/photoRouter');
const adminRouter = require('./router/adminRouter');

Routers.use(userRouter.routes());
Routers.use(resourcesRouter.routes());
Routers.use(productRouter.routes());
Routers.use(shoppingCartRouter.routes());
Routers.use(orderRouter.routes());
Routers.use(collectRouter.routes());

Routers.use(addressRouter.routes());
Routers.use(photoRouter.routes());
Routers.use(adminRouter.routes());

module.exports = Routers;
