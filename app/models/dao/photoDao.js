/*
 * @Description: 用户模块数据持久层
 * @Author: hai-27
 * @Date: 2020-02-07 16:51:56
 * @LastEditors: hai-27
 * @LastEditTime: 2020-02-27 02:12:30
 */
const db = require('./db.js');

module.exports = {


    addPhoto: async (name, icon, content, price, time) => {
        // ======= 当前时间 start =======
        let d = new Date();
        let creatime = d.getFullYear().toString() + '-' +
            (d.getMonth() + 1) + '-' +
            d.getDate() + ' ' +
            d.getHours() + ':' +
            d.getMinutes() + ':' +
            d.getSeconds();
        // ======= 当前时间 end =======

        const sql = `insert into photo(name, icon, content, price, time, creatime) values(?,?,?,?,?,?);`;
        return await db.query(sql, [name, icon, content, price, time, creatime]);
    },


    getPhotoList: async (pagenum, pagesize) => {
        const sql = 'select * from photo order by id desc limit ?,?;';
        return await db.query(sql, [pagenum, pagesize]);
    },

    getSearchList: async (pagenum, pagesize,searchText) => {
        const sql = `SELECT f.* FROM photo f WHERE
                    (f.NAME LIKE concat('%',?,'%') ||
                    f.price LIKE concat('%',?,'%') ||
                    f.content LIKE concat( '%', ?,'%')
                    ) ORDER BY f.id DESC;`;

        return await db.query(sql, [searchText]);
    },

    getCategoryList: async (pagenum, pagesize) => {
        const sql = 'select * from category order by id desc limit ?,?;';
        return await db.query(sql, [pagenum, pagesize]);
    },

    getPhotoById: async (id) => {
        const sql = 'select * from photo where id = ?;';
        return await db.query(sql, [id]);
    },

    delPhotoById: async (id) => {
        const sql = `delete from photo where id= ?;`;
        return await db.query(sql, [id]);
    },
    delCategory: async (id) => {
        const sql = `delete from category where id= ?;`;
        return await db.query(sql, [id]);
    },
    addCategory: async (categoryname, creator) => {
        // ======= 当前时间 start =======
        let d = new Date();
        let creatime = d.getFullYear().toString() + '-' +
            (d.getMonth() + 1) + '-' +
            d.getDate() + ' ' +
            d.getHours() + ':' +
            d.getMinutes() + ':' +
            d.getSeconds();
        // ======= 当前时间 end =======

        const sql = `insert into category(categoryname, creator, creatime) values(?,?,?);`;
        return await db.query(sql, [categoryname, creator, creatime]);
    },

    Getcount: async () => {
        const sql = `select count(1) count from photo;`;
        return await db.query(sql, []);
    },
    Getcount2: async () => {
        const sql = `select count(1) count from category;`;
        return await db.query(sql, []);
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