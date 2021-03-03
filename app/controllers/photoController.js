const rp = require('request-promise');
const photoDao = require('../models/dao/photoDao');

module.exports = {

  // 1、添加商品
  addPhoto: async ctx => {

    let {name, icon, content, price, time} = ctx.request.body;

    let registerResult = await photoDao.addPhoto(name, icon, content, price, time);
    if (registerResult.affectedRows === 1) {
      ctx.body = {success: true, data: null, msg: '添加失败'}
      return;
    }
    ctx.body = {success: false, data: null, msg: '未知错误'}

  },


  // 2、获取所有商品
  getPhotoList: async ctx => {
    let {pagenum, pagesize} = ctx.request.body;
    let count = await photoDao.Getcount();
    pagenum1 = (pagenum - 1) * pagesize
    pagesize2 = pagenum * pagesize
    let user = await photoDao.getPhotoList(pagenum1, pagesize2);
    ctx.body = {
      success: true,
      data: {
        pageTotal: count[0].count,
        data: user
      },
      msg: '成功'
    }
  },


  // 3、根据商品id获取详情（轮播图片）
  getPhotoById: async ctx => {
    let {id} = ctx.request.body;

    let photo = await photoDao.getPhotoById(id)
    ctx.body = {success: true, data: photo, msg: '成功'}

  },


  delPhotoById: async ctx => {

    let {id} = ctx.request.body;

    let registerResult = await photoDao.delPhotoById(id);

    if (registerResult.affectedRows === 1) {
      ctx.body = {
        success: true, data: '', msg: '删除成功'
      }
      return;
    }

    // 否则失败
    ctx.body = {
      success: false, data: '', msg: '未知错误，注册失败'
    }

  },


  getCategoryList: async ctx => {

    let {pagenum, pagesize} = ctx.request.body;
    let count = await photoDao.Getcount2();
    pagenum1 = (pagenum - 1) * pagesize
    pagesize1 = pagenum * pagesize
    let user = await photoDao.getCategoryList(pagenum1, pagesize1);
    ctx.body = {
      success: true,
      data: {
        pageTotal: count[0].count,
        data: user
      },
      msg: '成功'
    }
  },

  delCategory: async ctx => {

    let {id} = ctx.request.body;

    let registerResult = await photoDao.delCategory(id);

    if (registerResult.affectedRows === 1) {
      ctx.body = {
        success: true, data: '', msg: '删除成功'
      }
      return;
    }

    // 否则失败
    ctx.body = {
      success: false, data: '', msg: '未知错误，注册失败'
    }

  },

  addCategory: async ctx => {

    let {categoryname, creator} = ctx.request.body;

    let registerResult = await photoDao.addCategory(categoryname, creator);
    if (registerResult.affectedRows === 1) {
      ctx.body = {success: true, data: null, msg: '添加失败'}
      return;
    }
    ctx.body = {success: false, data: null, msg: '未知错误'}

  },

  getSearchList: async ctx => {
    let {pagenum, pagesize, searchText} = ctx.request.body;
    let count = await photoDao.Getcount();
    pagenum1 = (pagenum - 1) * pagesize
    pagesize1 = pagenum * pagesize
    let user = await photoDao.getSearchList(pagenum1, pagesize1,searchText);
    ctx.body = {
      success: true,
      data: {
        pageTotal: count[0].count,
        data: user
      },
      msg: '成功'
    }
  },


};
