/*
 * @Description: 用户模块数据持久层
 * @Author: hai-27
 * @Date: 2020-02-07 16:51:56
 * @LastEditors: hai-27
 * @LastEditTime: 2020-02-27 02:12:30
 */
const db = require('./db.js');

module.exports = {
  // 连接数据库根据用户名和密码查询用户信息
  Login: async (uname, pwd) => {
    console.log(uname, pwd)
    const sql = 'select * from user where uname = ? and pwd = ?';
    return await db.query(sql, [uname, pwd]);
  },
  // 连接数据库根据用户名查询用户信息
  FindUserName: async (userName) => {
    const sql = 'select * from users where userName = ?';
    return await db.query(sql, [userName]);
  },
  // 连接数据库插入用户信息
  Register: async (id, userName, password, phone) => {
    let str = new Date(parseInt(new Date().getTime())).toLocaleString().replace(/:\d{1,2}$/, ' ')
    const sql = `insert into user values(?,?,?,1,1,
        'http://service.szhtkj.com.cn/SzhtShop/uploads/default/avatar/userimg.png',
        ?,null,?)`;
    return await db.query(sql, [id, userName, password, phone, str]);
  },

  // 3、获取所有用户
  GetUsers: async () => {
    const sql = 'select * from users';
    return await db.query(sql, []);
  },
  getMaxId: async () => {
    const sql = `SELECT  max(id) id  FROM  user;`;
    return await db.query(sql, []);
  },
}
