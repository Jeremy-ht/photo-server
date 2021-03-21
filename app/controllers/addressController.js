
const rp = require('request-promise');
const addressDao = require('../models/dao/addressDao');
const common = require('../../common');
const {checkUserInfo, checkUserName} = require('../middleware/checkUserInfo');

module.exports = {

  // 1、添加地址
  addAddress: async ctx => {

    let {userid, name, phone, address} = ctx.request.body;

    let uid = await addressDao.getMaxId()

    let registerResult = await addressDao.addAddress(userid, uid, name, phone, address);


    if (registerResult.affectedRows === 1) {
      ctx.body = {
        success: true,
        code: '001',
        msg: '添加成功'
      }
      return;
    }

    ctx.body = {
      success: false,
      data: '',
      msg: '添加失败'
    }

  },

  // 2、根据用户名获取地址
  getAddressList: async ctx => {
    let {userid} = ctx.request.body;

    let address = await addressDao.getAddressList(userid)
    ctx.body = {
      success: true,
      data: address,
      msg: '成功'
    }

  },


};
