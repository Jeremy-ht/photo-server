/*
 * @Description: 用户模块路由
 * @Author: hai-27
 * @Date: 2020-02-07 16:51:56
 * @LastEditors: hai-27
 * @LastEditTime: 2020-03-27 12:41:14
 */
const Router = require('koa-router');
const photoController = require('../../controllers/photoController')

let photoRouter = new Router();

// 1、添加商品
// 2、获取所有商品
// 3、根据商品id获取详情（轮播图片）
photoRouter

    .post('/photo/addPhoto', photoController.addPhoto)
    .post('/photo/getPhotoList', photoController.getPhotoList)
    .post('/photo/getPhotoById', photoController.getPhotoById)

module.exports = photoRouter;
