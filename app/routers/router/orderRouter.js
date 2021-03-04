const Router = require('koa-router');
const orderController = require('../../controllers/orderController')

let orderRouter = new Router();

orderRouter
    .post('/order/addOrder', orderController.AddOrder)
    .post('/order/getOrderById', orderController.GetOrder)
    .post('/order/GetOrderList', orderController.GetOrderList)


module.exports = orderRouter;