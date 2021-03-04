/*
 * @Description: 订单模块数据持久层
 * @Author: hai-27
 * @Date: 2020-02-24 16:36:19
 * @LastEditors: hai-27
 * @LastEditTime: 2020-02-27 14:31:56
 */
const db = require('./db.js');

module.exports = {

    AddOrder: async (userid, photoid, addressid, price, note, phototime, orderid) => {

        // ======= 当前时间 start =======
        let d = new Date();
        let creatime = d.getFullYear().toString() + '-' +
            (d.getMonth() + 1) + '-' +
            d.getDate() + ' ' +
            d.getHours() + ':' +
            d.getMinutes() + ':' +
            d.getSeconds();
        // ======= 当前时间 end =======

        let sql = `insert into orders(userid, photoid, addressid, price, note, phototime, orderid, type, creatime) 
                values(?,?,?,?,?,?,?,1,?)`;

        return await db.query(sql, [userid, photoid, addressid, price, note, phototime, orderid, creatime]);
    },


    GetOrder: async (userid) => {
        let sql = `
        select 
             o.*,
             p.name name,
             p.icon icon,
             c.categoryname categoryname
        from orders o
        LEFT JOIN photo p on p.id = o.photoid
        LEFT JOIN category c on c.id = o.addressid
        where userid = ? order by o.id desc;
        `;
        return await db.query(sql, [userid]);
    },

    GetOrderList: async (pagenum, pagesize) => {
        const sql = `
         select 
             o.*,
             p.name name,
             p.icon icon,
             c.categoryname categoryname
        from orders o
        LEFT JOIN photo p on p.id = o.photoid
        LEFT JOIN category c on c.id = o.addressid
        order by o.id desc limit ?,?`;

        return await db.query(sql, [pagenum, pagesize]);
    },


    Getcount: async () => {
        const sql = `select count(1) count from orders;`;
        return await db.query(sql, []);
    },

    GetOrderCount: async (userid) => {
        let sql = 'select count(1) count from orders where userid = ?;';
        return await db.query(sql, [userid]);
    },
}
