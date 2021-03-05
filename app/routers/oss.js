let router = new Router();
let fs = require('fs');

const {OSS_CONFIG} = require('./../../config')

// 初始化client
let co = require('co')
let OSS = require('ali-oss')

let client = new OSS({
    region: OSS_CONFIG.region,
    accessKeyId: OSS_CONFIG.accessKeyId,
    accessKeySecret: OSS_CONFIG.accessKeySecret
})


// 图片上传
router.post('/upload', upload.single('file'), function (req, res, next) {
    // 文件路径
    var filePath = './' + req.file.path;
    // 文件类型
    var temp = req.file.originalname.split('.');
    var fileType = temp[temp.length - 1];
    var lastName = '.' + fileType;
    // 构建图片名
    var fileName = Date.now() + lastName;
    // 图片重命名
    var key = fileName;
    // 阿里云 上传文件
    co(function* () {
        client.useBucket(OSS_CONFIG.bucket);
        var result = yield client.put(key, filePath);
        var imageSrc = `http://${OSS_CONFIG.BucketName}/` + result.name;
        // 上传之后删除本地文件
        fs.unlinkSync(filePath);
        res.end(JSON.stringify({
            success: true, msg: '上传成功', data: {
                path: imageSrc
            }
        }));
    }).catch(function (err) {
        // 上传之后删除本地文件
        fs.unlinkSync(filePath);
        res.end(JSON.stringify({success: false, msg: '上传失败', data: ''}));
    });
})

module.exports = router;
