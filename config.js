/*
 * @Description: 全局配置信息
 * @Author: hai-27
 * @Date: 2020-02-07 16:51:56
 * @LastEditors: hai-27
 * @LastEditTime: 2020-02-28 23:21:30
 */
const path = require('path');

//  String endpoint = "oss-cn-beijing.aliyuncs.com";
//         String accessKeyId = "LTAI4FtGxtVnUgLkq3aQubck";
//         String accessKeySecret = "T7clyfq6jSUHTCm9ysmC2Qf9Mn5Y8x";
//         String bucketName = "zaixian-edu";
const OSS_CONFIG = {
  region: 'oss-cn-hangbei',
  accessKeyId: 'LTAI4FtGxtVnUgLkq3aQubck',
  accessKeySecret: 'T7clyfq6jSUHTCm9ysmC2Qf9Mn5Y8x',
  bucket: 'zaixian-edu',
  endPoint: 'oss-cn-beijing.aliyuncs.com',
  BucketName: 'zaixian-edu',
}

module.exports = {
  OSS_CONFIG,
  Port: 3000, // 启动端口
  // staticDir: path.resolve('./public'), // 静态资源路径
  // uploadDir: path.join(__dirname, path.resolve('public/')), // 上传文件路径
  // 数据库连接设置
  dbConfig: {
    connectionLimit: 10,
    host: 'cn1.utools.club',
    port: 40629,
    user: 'root',
    password: 'root',
    database: 'storeDB'
  }
}
