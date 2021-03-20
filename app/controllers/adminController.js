const rp = require('request-promise');
const adminDao = require('../models/dao/adminDao');

module.exports = {


  // 1、登录
  Login: async ctx => {

    let {username, password} = ctx.request.body;

    let user = await adminDao.Login(username, password);

    if (user.length === 0) {
      ctx.body = {
        success: false, code: '004', msg: '用户名或密码错误'
      }
      return;
    }

    if (user.length === 1) {
      ctx.session.user = user[0];
      ctx.body = {
        success: true, data: user, msg: '登录成功'
      }
      return;
    }

    ctx.body = {
      success: false, data: '', msg: '未知错误'
    }

  },

  // 2、注册
  Register: async ctx => {
    let {username, name, phone} = ctx.request.body;

    try {
      let registerResult = await adminDao.Register(username, name, phone)

      if (registerResult.affectedRows === 1) {
        ctx.body = {
          success: true, data: '', msg: '注册成功'
        }
        return;
      }
      // 否则失败
      ctx.body = {
        success: false, data: '', msg: '未知错误，注册失败'
      }
    } catch (error) {

    }
  },

  // 3、获取所有用户
  GetAdminList: async ctx => {

    let {pagenum, pagesize} = ctx.request.body;
    let count = await adminDao.Getcount();
    pagenum1 = (pagenum - 1) * pagesize
    pagesize1 = pagenum * pagesize
    let user = await adminDao.GetAdminList(pagenum1, pagesize1);
    ctx.body = {
      success: true,
      data: {
        pageTotal: count[0].count,
        data: user
      },
      msg: '成功'
    }

  },

  DelAdmin: async ctx => {

    let {id} = ctx.request.body;

    let registerResult = await adminDao.DelAdmin(id);

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

};
