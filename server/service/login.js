const jwt = require("jsonwebtoken");

function findUser(phone, smsCode) {
    if (phone == 13800000000 && smsCode == 123456) {
        // 返回用户信息
        return {
            userId: 'asdfsd234234234',
            phone: 1380000000,
            sex: 'man',
            name: '老胡'
        }
    } else {
        return null;
    }
}


module.exports = async ctx => {
    // 获取前端传过来的参数phone,smsCode
    let {
        phone,
        smsCode
    } = ctx.params;
    // 查找用户
    let result = findUser(phone, smsCode);
    // 找不到
    if (!result) {
        ctx.body = {
            code: 604,
            msg: '用户名或密码错误'
        }
    } else {
        // 把userId和其它相关信息加密成一个token,返回给前端
        let userInfo = {
            userId: result.userId,
            phone: result.phone
        }
        // 生成token
        let token = jwt.sign(userInfo, "web03-server", {
            // expiresIn: "1000h"
            expiresIn: "1000h"
        });

        ctx.body = {
            code: 666,
            msg: '登陆成功',
            user: {
                phone,
                token
            }
        }
    }
}
