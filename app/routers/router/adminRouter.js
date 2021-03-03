const Router = require('koa-router');
const adminController = require('../../controllers/adminController')

let adminRouter = new Router();

adminRouter
    .post('/admin/login', adminController.Login)
    .post('/admin/register', adminController.Register)
    .post('/admin/getAdminList', adminController.GetAdminList)
    .post('/admin/delAdmin', adminController.DelAdmin)

module.exports = adminRouter;
