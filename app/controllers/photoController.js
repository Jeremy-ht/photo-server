const rp = require('request-promise');
const photoDao = require('../models/dao/photoDao');

module.exports = {

    // 1、添加商品
    addPhoto: async ctx => {

        let {name, icon, image, price, time} = ctx.request.body;

        let user = await photoDao.addPhoto(name, icon, image, price, time);

        if (user.length === 0) {
            ctx.body = {success: false, data: null, msg: '添加失败'}
            return;
        }

        if (user.length === 1) {
            ctx.body = {success: true, msg: '添加成功'}
            return;
        }

        ctx.body = {success: false, data: null, msg: '未知错误'}

    },


    // 2、获取所有商品
    getPhotoList: async ctx => {
        let user = await photoDao.getPhotoList();
        ctx.body = {success: true, data: user, msg: '成功'}
    },


    // 3、根据商品id获取详情（轮播图片）
    getPhotoById: async ctx => {
        let {id} = ctx.request.body;

        let photo = await photoDao.getPhotoById(id)
        ctx.body = {success: true, data: photo, msg: '成功'}

    },

};
