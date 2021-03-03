
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
    .post('/photo/delPhoto', photoController.delPhotoById)

    .post('/category/getCategoryList', photoController.getCategoryList)
    .post('/category/delCategory', photoController.delCategory)
    .post('/category/addCategory', photoController.addCategory)

    .post('/user/getSearchList', photoController.getSearchList)

module.exports = photoRouter;
