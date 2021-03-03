const Router = require('koa-router');
const addressController = require('../../controllers/addressController')

let addressRouter = new Router();

addressRouter
    .post('/address/addAddress', addressController.addAddress)
    .post('/address/getAddressList', addressController.getAddressList)

module.exports = addressRouter;
