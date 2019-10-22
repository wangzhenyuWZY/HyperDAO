const Router = require('koa-router');
const router = new Router();

// const index = require('./service/index')
// router.all('/',index);

router.all('/',require('./service/index'))
router.all('/login',require('./service/login'))
router.all('/logout',require('./service/logout'))
router.all('/list',require('./service/list'))

module.exports = router;