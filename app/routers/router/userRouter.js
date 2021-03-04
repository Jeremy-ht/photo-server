
const Router = require('koa-router');
const userController = require('../../controllers/userController')

let userRouter = new Router();

userRouter
    .post('/users/login', userController.Login)
    .post('/users/miniProgramLogin', userController.miniProgramLogin)
    .post('/users/findUserName', userController.FindUserName)
    .post('/users/register', userController.Register)

    .post('/user/login', userController.Login2)
    .post('/user/register', userController.Register2)
    .post('/user/getUsers', userController.GetUsers)
    .post('/user/updPasswordById', userController.UpdPasswordById)

module.exports = userRouter;
