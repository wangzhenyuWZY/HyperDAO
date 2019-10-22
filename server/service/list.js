const jwt = require("jsonwebtoken");
const util = require("util");
const verify = util.promisify(jwt.verify);

module.exports = async ctx=> {
    // 检查token
    const token = "Bearer " + ctx.header["laohu-token"];
    // 解密token
    try {
        let payload = await verify(token.split(" ")[1], "web03-server");
        console.log('token信息', payload);
        let userId = payload.userId;
        // 根据userId去数据库查询购物车的列表
        ctx.body = {
            code: 666,
            msg: 'success',
            list: [
                {
                    name: '青轴键盘',
                    price: 300
                },
                {
                    name: '茶轴键盘',
                    price: 400
                },
                {
                    name: '红轴键盘',
                    price: 600
                },
            ]
        }
    } catch (error) {
        console.log('error',error);
        ctx.body = {
            code: 603,
            msg: 'token不存在或者已失效'
        }
    }
}