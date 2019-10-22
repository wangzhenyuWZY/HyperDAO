const Koa = require("koa");
const router = require("./router");
const koaBody = require("koa-body");
const app = new Koa();

app.use(koaBody());
app.use(async (ctx, next) => {
  ctx.params = {
    ...ctx.query,
    ...ctx.request.body
  };
  await next();
});

// app.use(async (ctx, next)=> {
//     // 允许跨域
//     ctx.set('Access-Control-Allow-Origin', '*');
//     ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization,laohu-token, Accept, X-Requested-With , yourHeaderFeild');
//     ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//     if (ctx.method == 'OPTIONS') {
//       ctx.body = 200;
//     } else {
//       await next();
//     }
//   });

app.use(router.routes());
app.listen(3000, () => {
  console.log("服务已启动,在http://localhost:3000");
});
