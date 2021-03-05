const Router = require('koa-router');
const adminController = require('../../controllers/adminController')
const multiparty = require('multiparty');
let adminRouter = new Router();

adminRouter
    .post('/admin/login', adminController.Login)
    .post('/admin/register', adminController.Register)
    .post('/admin/getAdminList', adminController.GetAdminList)
    .post('/admin/delAdmin', adminController.DelAdmin)

    .post('/upload/headImage', function (req, res, next) {
        console.log('11111111111')
        let form = new multiparty.Form();
        console.log(req)
        form.uploadDir = "../public";
        // form.keepExtensions=true;   //是否保留后缀
        form.parse(req, function (err, fields, files) {  //其中fields表示你提交的表单数据对象，files表示你提交的文件对象
            console.log(111,req);
            console.log(fields, files);
            if (err) {
                res.json({
                    status: "1",
                    msg: "上传失败！" + err
                });
            } else {
                res.json({
                    status: "0",
                    msg: "上传成功！",
                    imgSrc: files.image
                });
            }
        })

    })

module.exports = adminRouter;
