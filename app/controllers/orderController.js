/*
 * @Description: 订单模块控制器
 * @Author: hai-27
 * @Date: 2020-02-24 16:35:22
 * @LastEditors: hai-27
 * @LastEditTime: 2020-02-27 14:32:16
 */
const orderDao = require('../models/dao/orderDao');
const shoppingCartDao = require('../models/dao/shoppingCartDao');
const productDao = require('../models/dao/productDao');
const checkLogin = require('../middleware/checkLogin');

module.exports = {

    // 提交订单
    AddOrder: async (ctx) => {
        let {userid, photoid, addressid, price, note, phototime} = ctx.request.body;

        const timeTemp = new Date().getTime();
        const orderid = userid + timeTemp;

        try {

            const result = await orderDao.AddOrder(userid, photoid, addressid, price, note, phototime, orderid);

            // 插入成功
            if (result.affectedRows == 1) {
                ctx.body = {
                    success: true, data: '', msg: '提交成功'
                }
                return;
            }

            // 否则失败
            ctx.body = {
                success: false, data: '', msg: '订单提交失败，请刷新再试！'
            }

        } catch (error) {

        }
    },


    // 根据userid查询订单
    GetOrder: async ctx => {
        let {userid} = ctx.request.body;

        const count = await orderDao.GetOrderCount(userid);

        const orders = await orderDao.GetOrder(userid);

        ctx.body = {
            success: true,
            data: {
                pageTotal: count[0].count,
                data: orders
            },
            msg: '成功'
        }

    },


    // 查询所有订单
    GetOrderList: async ctx => {

        let {pagenum, pagesize} = ctx.request.body;
        let count = await orderDao.Getcount();
        pagenum1 = (pagenum - 1) * pagesize
        pagesize1 = pagenum * pagesize

        const orders = await orderDao.GetOrderList(pagenum1, pagesize1);

        ctx.body = {
            success: true,
            data: {
                pageTotal: count[0].count,
                data: orders
            },
            msg: '成功'
        }

    },


    // 根据userid获取未支付订单数量
    GetOrderByidNoPay: async ctx => {
        let {userid} = ctx.request.body;
        const count = await orderDao.GetOrderByidNoPay(userid);

        ctx.body = {
            success: true,
            data: {
                data: count[0].count
            },
            msg: '成功'
        }

    },

    GetOrderChart: async ctx => {

        const order = await orderDao.GetOrderChart();

        let arr = []

        console.log(order)
        for (let i = 1; i < 13; i++) {
            let obj = {'name': 0, 'value': 0}

            let temp = false
            order.forEach(item => {
                if (i == item.name) {
                    obj.name = item.name
                    obj.value = item.value
                    temp = true
                }
            })

            if (!temp) {
                obj.name = i
                obj.value = 0
            }

            arr.push(obj)
        }


        console.log(arr)

        ctx.body = {
            success: true,
            data: {
                data: arr
            },
            msg: '成功'
        }

    },
    GetOrderChart2: async ctx => {

        const count = await orderDao.GetOrderChart2();

        ctx.body = {
            success: true,
            data: {
                data: count
            },
            msg: '成功'
        }

    },


}
