/*
 * @Description: 用户模块路由
 * @Author: hai-27
 * @Date: 2020-02-07 16:51:56
 * @LastEditors: hai-27
 * @LastEditTime: 2020-03-27 12:41:14
 */
const Router = require('koa-router');
const addressController = require('../../controllers/addressController')

let addressRouter = new Router();

addressRouter
    .post('/address/addAddress', addressController.addAddress)
    .post('/address/getAddressList', addressController.getAddressList)

module.exports = addressRouter;
