
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

        let sql = `insert into orders(userid, photoid, addressid, price, note, phototime, orderid, type, creatime,state) 
                values(?,?,?,?,?,?,?,1,?,0)`;

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
             u.phone phone,
             u.uname uname,
             c.categoryname categoryname
        from orders o
        LEFT JOIN photo p on p.id = o.photoid
        LEFT JOIN category c on c.id = o.addressid
        LEFT JOIN user u on u.id = o.userid
        order by o.id desc limit ?,?;`;

        return await db.query(sql, [pagenum, pagesize]);
    },

    GetOrderList2: async (pagenum, pagesize,text) => {
        const sql = `
        SELECT
            o.*,
            p.NAME NAME,
            p.icon icon,
            u.phone phone,
            u.uname uname,
            c.categoryname categoryname 
        FROM
            orders o
            LEFT JOIN photo p ON p.id = o.photoid
            LEFT JOIN category c ON c.id = o.addressid
            LEFT JOIN user u ON u.id = o.userid 
        WHERE
            c.categoryname LIKE '%${text}%' 
            or u.phone LIKE '%${text}%' 
            or u.uname LIKE '%${text}%' 
            or p.name LIKE '%${text}%' 
        ORDER BY
            o.id DESC 
            LIMIT ?,?;`;

        return await db.query(sql, [pagenum, pagesize]);
    },


    Getcount: async () => {
        const sql = `select count(1) count from orders;`;
        return await db.query(sql, []);
    },
    Getcount2: async (text) => {
        const sql = `
        SELECT
            count(1) count
        FROM
            orders o
        LEFT JOIN photo p ON p.id = o.photoid
        LEFT JOIN category c ON c.id = o.addressid
        LEFT JOIN user u ON u.id = o.userid 
        WHERE
        c.categoryname LIKE '%${text}%' 
        or u.phone LIKE '%${text}%' 
        or u.uname LIKE '%${text}%' 
        or p.name LIKE '%${text}%';`;
        return await db.query(sql, []);
    },

    GetOrderCount: async (userid) => {
        let sql = 'select count(1) count from orders where userid = ?;';
        return await db.query(sql, [userid]);
    },

    GetOrderByidNoPay: async (userid) => {
        let sql = 'select count(1) count from orders where userid = ? and type = 1;';
        return await db.query(sql, [userid]);
    },

    GetOrderChart: async () => {
        let sql =
            `
                 SELECT
                    t.monthNo AS name,
                    COUNT( 1 ) AS value
                FROM
                    (
                    SELECT
                        MONTH ( a.creatime ) AS monthNo,
                        YEAR ( a.creatime ) AS myYear,
                        a.id AS id
                    FROM
                        orders a
                    ) AS t
                WHERE
                    t.myYear = '2021'
                GROUP BY
                    t.monthNo;
            `;
        return await db.query(sql,[]);
    },

    GetOrderChart2: async () => {
        let sql =
            `
                SELECT
                    concat(c.categoryname, '店') name,
                    sum( f.price ) value
                FROM
                    orders f
                LEFT JOIN category c ON f.addressid = c.id 
                WHERE f.type = 2 and SUBSTRING_INDEX( f.creatime, '-', 1 ) = '2021' 
                GROUP BY f.addressid
            `;
        return await db.query(sql,[]);
    },
}
