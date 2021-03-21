
const path = require('path');


const OSS_CONFIG = {

}

module.exports = {
  OSS_CONFIG,
  Port: 3000, // 启动端口
  // staticDir: path.resolve('./public'), // 静态资源路径
  // uploadDir: path.join(__dirname, path.resolve('public/')), // 上传文件路径
  // 数据库连接设置
  dbConfig: {
    connectionLimit: 10,
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'storeDB'
  }
}
