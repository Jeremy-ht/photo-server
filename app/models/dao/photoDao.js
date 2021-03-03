/*
 * @Description: 用户模块数据持久层
 * @Author: hai-27
 * @Date: 2020-02-07 16:51:56
 * @LastEditors: hai-27
 * @LastEditTime: 2020-02-27 02:12:30
 */
const db = require('./db.js');

module.exports = {


    addPhoto: async (name, icon, image, price, time) => {
        // ======= 当前时间 start =======
        let d = new Date();
        let creatime = d.getFullYear().toString() + '-' +
            (d.getMonth() + 1) + '-' +
            d.getDate() + ' ' +
            d.getHours() + ':' +
            d.getMinutes() + ':' +
            d.getSeconds();
        // ======= 当前时间 end =======

        const sql = `insert into photo(name, icon, image, price, time, creatime) values(?,?,?,?,?,?)`;
        return await db.query(sql, [name, icon, image, price, time, creatime]);
    },


    getPhotoList: async () => {
        const sql = 'select * from photo';
        return await db.query(sql, []);
    },

    getPhotoById: async (id) => {
        const sql = 'select * from address where userid = ?';
        return await db.query(sql, [id]);
    },

    Register: async (id, userName, password, phone) => {

        // ======= 当前时间 start =======
        let d = new Date();
        let creatime = d.getFullYear().toString() + '-' +
            (d.getMonth() + 1) + '-' +
            d.getDate() + ' ' +
            d.getHours() + ':' +
            d.getMinutes() + ':' +
            d.getSeconds();
        // ======= 当前时间 end =======
        const sql = `insert into user values(?,?,?,1,1,
        'http://service.szhtkj.com.cn/SzhtShop/uploads/default/avatar/userimg.png',
        ?,null,?)`;
        return await db.query(sql, [id, userName, password, phone, creatime]);
    },



    getMaxId: async () => {
        const sql = `SELECT  max(id) id  FROM  user;`;
        return await db.query(sql, []);
    },
}
