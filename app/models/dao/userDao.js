/*
 * @Description: 用户模块数据持久层
 * @Author: hai-27
 * @Date: 2020-02-07 16:51:56
 * @LastEditors: hai-27
 * @LastEditTime: 2020-02-27 02:12:30
 */
const db = require('./db.js');

module.exports = {

  Login: async (uname, pwd) => {
    console.log(uname, pwd)
    const sql = 'select * from user where uname = ? and pwd = ?';
    return await db.query(sql, [uname, pwd]);
  },

  FindUserName: async (userName) => {
    const sql = 'select * from users where userName = ?';
    return await db.query(sql, [userName]);
  },

  Register: async (id, userName, password, phone) => {
    let str = new Date(parseInt(new Date().getTime())).toLocaleString().replace(/:\d{1,2}$/, ' ')
    const sql = `insert into user values(?,?,?,1,1,
        'http://service.szhtkj.com.cn/SzhtShop/uploads/default/avatar/userimg.png',
        ?,null,?)`;
    return await db.query(sql, [id, userName, password, phone, str]);
  },

  // 3、获取所有用户
  GetUsers: async (pagenum, pagesize) => {
    const sql = 'select * from user order by id desc limit ' + pagenum + "," + pagesize + ";";
    return await db.query(sql, []);
  },


  getUserById: async (id, password) => {
    const sql = 'select * from user where id = ? and pwd = ?;';
    return await db.query(sql, [id, password]);
  },
  updUserById: async (id, password) => {
    const sql = 'update user set  pwd = ?  where id = ? ;';
    return await db.query(sql, [password, id]);
  },


  Getcount: async () => {
    const sql = `SELECT count(1) count from user;`;
    return await db.query(sql, []);
  },

  getMaxId: async () => {
    const sql = `SELECT  max(id) id  FROM  user;`;
    return await db.query(sql, []);
  },
}
