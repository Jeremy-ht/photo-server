
const resourcesDao = require('../models/dao/resourcesDao');
const oss = require('ali-oss');
module.exports = {

  Carousel: async ctx => {



    // const store =  new oss({
    //   accessKeyId: 'your access key',
    //   accessKeySecret: 'your access secret',
    //   bucket: 'your bucket name',
    //   region: 'oss-cn-hangzhou'
    // });
    //
    // exports.upload = async (req, res, next) => {
    //   try {
    //     console.log(__dirname);//当前文件的绝对路径
    //     //将两个路径序列为绝对路径
    //     let static_url = path.resolve(__dirname, '../public');
    //     console.log(static_url);
    //     //图片存储的本地路径
    //     let img_url = '指定一个路径';
    //     //图片远程存储路径
    //     let img_urlMonth = 'materiels/' + moment().format('YYYY/M/');
    //     //饿了么文件上传组件传过来的一些图片属性信息
    //     let img = req.files.file;
    //     //请求参数
    //     let data = req.body;
    //     //图片扩展民
    //     let extname = path.extname(img.name);
    //     //上传后的新文件名--uuid+扩展名
    //     let name = uuid.v4() + extname;
    //     //文件本地临时存放目录
    //     let imgAbsPath = static_url + img_url + name;
    //     //文件远程存储路径
    //     let imgOssAbsPath = img_urlMonth + name;
    //     //文件读取流
    //     let readable = fs.createReadStream(img.path);
    //     //文件写入流
    //     let writable = fs.createWriteStream(imgAbsPath);
    //     //将读取到的字节拷贝到输出流汇总
    //     readable.pipe(writable);
    //     console.log('imgOssAbsPath', imgOssAbsPath);
    //
    //     let resultObject = await store.put(imgOssAbsPath, readable);
    //     await fs.unlink(imgAbsPath, function (err) {
    //       if (err) {
    //         throw err;
    //       }
    //     });
    //     if (endsWith(resultObject.name, '.jpg')
    //         || endsWith(resultObject.name, '.png')
    //         || endsWith(resultObject.name, '.jpeg')
    //         || endsWith(resultObject.name, '.gif')) {
    //       let url = '';
    //       if (data.width) {
    //         url = '阿里云oss存储路径' + resultObject.name;
    //       } else {
    //         url = '阿里云oss存储路径' + resultObject.name;
    //       }
    //       res.json({
    //         url: url,
    //         title: name,
    //         imgName: img.name,
    //         data: data,
    //         state: 'SUCCESS'
    //       });
    //     } else {
    //       res.json({
    //         url: '阿里云存储路径' + resultObject.name,
    //         title: name,
    //         name: img.name,
    //         data: data,
    //         state: 'SUCCESS'
    //       });
    //     }
    //   } catch (err) {
    //     next(err);
    //   }
    // };


  }
}
