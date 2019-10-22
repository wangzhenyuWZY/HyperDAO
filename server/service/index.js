const Vue = require('vue')
module.exports = async ctx => {
    // 第 1 步：创建一个 Vue 实例
    const app = new Vue({
        data: {
            list: [
                {path: '/login',name: '登陆'},
                {path: '/logout',name: '登出'},
                {path: '/list',name: '购物车列表'},
            ]
        },
        template: 
        `<ol>
        <li v-for="(item,index) in list" :key="index"><a :href="item.path">{{item.name}} {{item.path}} </a></li>
        </ol>`
    })
    // 第 2 步：创建一个 renderer
    const renderer = require('vue-server-renderer').createRenderer()

    // 在 2.5.0+，如果没有传入回调函数，则会返回 Promise：
    let result = await renderer.renderToString(app);

    ctx.body = result;
}