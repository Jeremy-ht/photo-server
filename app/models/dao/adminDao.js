
const db = require('./db.js');

module.exports = {

    Login: async (username, password) => {
        const sql = 'select * from admin where username = ? and password = ?';
        return await db.query(sql, [username, password]);
    },



    Register: async (username, name, phone) => {

        // ======= 当前时间 start =======
        let d = new Date();
        let creatime = d.getFullYear().toString() + '-' +
            (d.getMonth() + 1) + '-' +
            d.getDate() + ' ' +
            d.getHours() + ':' +
            d.getMinutes() + ':' +
            d.getSeconds();
        // ======= 当前时间 end =======
        const sql = `insert into admin(username, password, name, phone, creatime) 
        values(?,'333333',?,?,?)`;
        return await db.query(sql, [username, name, phone, creatime]);
    },


    GetAdminList: async (pagenum, pagesize) => {
        const sql = 'select * from admin order by id desc limit ' + pagenum + "," + pagesize + ";";
        return await db.query(sql, []);
    },


    DelAdmin: async (id) => {
        console.log(id)
        const sql = `delete from admin where id= ?;`;
        return await db.query(sql, [id]);
    },

    Getcount: async () => {
        const sql = `SELECT count(1) count FROM  admin;`;
        return await db.query(sql, []);
    },

    getMaxId: async () => {
        const sql = `SELECT  max(id) id  FROM  admin;`;
        return await db.query(sql, []);
    },
}
