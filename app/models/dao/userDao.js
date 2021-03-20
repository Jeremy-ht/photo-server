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
        'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
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

    // 评论
    updUserComment: async (id, state) => {
        const sql = 'update comment set  state = ?  where id = ?;';
        return await db.query(sql, [state, id]);
    },

    updState: async (id) => {
        const sql = 'update orders set state = 1  where orderid = ?;';
        return await db.query(sql, [id]);
    },

    updOrder: async (id) => {
        const sql = 'update orders set type = 2  where orderid = ?;';
        return await db.query(sql, [id]);
    },

    addCommentuser: async (userid, infoid, commentary) => {
        // ======= 当前时间 start =======
        let d = new Date();
        let timeTemp = d.getFullYear().toString() + '-' +
            (d.getMonth() + 1) + '-' +
            d.getDate() + ' ' +
            d.getHours() + ':' +
            d.getMinutes() + ':' +
            d.getSeconds();
        // ======= 当前时间 end =======

        console.log(timeTemp)
        const sql = `INSERT INTO comment(userid, infoid, commentary, state, creatime) VALUES( ?,?,?,0,? );`;
        return await db.query(sql, [userid, infoid, commentary, timeTemp]);
    },

    Getcount22: async (detailId) => {


        if (detailId == 0) {
            const sql = `SELECT count(1) count from comment ;`;
            return await db.query(sql, []);
        } else if (detailId == -1) {
            const sql = `SELECT count(1) count from comment where state = 0;`;
            return await db.query(sql, [detailId]);
        } else if (detailId == -2) {
            const sql = `SELECT count(1) count from comment where state != 0;`;
            return await db.query(sql, [detailId]);
        } else {
            const sql = `SELECT count(1) count from comment where userid = ?;`;
            return await db.query(sql, [detailId]);
        }

    },

    GetCommentList: async (pagenum, pagesize, detailId) => {
        if (detailId == 0) {

            const sql =
                `SELECT c.*, u.image image, u.uname uname, p.name title FROM comment c LEFT JOIN user u ON u.id = c.userid LEFT JOIN photo p ON p.id = c.infoid ORDER BY c.id DESC limit ${pagenum},${pagesize};`
            // const sql = 'select * from user order by id desc limit ' + pagenum + "," + pagesize + ";";
            return await db.query(sql, []);
        } else if (detailId == -1) { // 未审核
            const sql =
                `SELECT c.*, u.image image, u.uname uname, p.name title FROM comment c LEFT JOIN user u ON u.id = c.userid LEFT JOIN photo p ON p.id = c.infoid
                 WHERE c.state = 0 ORDER BY c.id DESC limit ${pagenum},${pagesize};`
            return await db.query(sql, []);
        } else if (detailId == -2) {
            const sql =
                `SELECT c.*,  u.image image,u.uname uname, p.name title FROM comment c LEFT JOIN user u ON u.id = c.userid LEFT JOIN photo p ON p.id = c.infoid
                 WHERE c.state != 0 ORDER BY c.id DESC limit ${pagenum},${pagesize};`
            return await db.query(sql, []);
        } else {
            const sql =
                `SELECT c.*, u.image image,u.uname uname, p.name title FROM comment c LEFT JOIN user u ON u.id = c.userid LEFT JOIN photo p ON p.id = c.infoid
                 WHERE c.state = 1 and  c.infoid = ${detailId} ORDER BY c.id DESC limit ${pagenum},${pagesize};`
            // const sql = 'select * from comment where state = 1 and  userid = ' + detailId + ' order by id desc limit ' + pagenum + "," + pagesize + ";";
            return await db.query(sql, []);
        }


    },

}
