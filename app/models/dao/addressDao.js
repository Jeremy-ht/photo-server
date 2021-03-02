
const db = require('./db.js');

module.exports = {

  addAddress: async (userid, uid, name, phone, address) => {

    let str = new Date(parseInt(new Date().getTime())).toLocaleString()
        .replace(/:\d{1,2}$/, ' ')


    const sql = `insert into address values(?,?,?,?,?,1,?)`;

    return await db.query(sql, [uid, userid, name, phone, address, str]);
  },

  getAddressList: async (id) => {
    const sql = 'select * from address where userid = ?';
    return await db.query(sql, [id]);
  },

  getMaxId: async () => {
    const sql = `SELECT  max(id) id  FROM  address;`;
    return await db.query(sql, []);
  },
}
