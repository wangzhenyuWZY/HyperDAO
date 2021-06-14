import Vue from "vue";
import Router from "vue-router";
import store from "../store/index";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/index"
    },
    {
      path: "/index",
      component: () => import("@/views/index"),
      meta: {
        title: "首页",
        // 缓存首页
        keepAlive: false
      }
    },
    {
      path: "/project",
      component: () => import("@/views/project"),
      meta: {
        title: "项目",
        // 缓存首页
        keepAlive: false
      }
    },
    {
      path: "/details",
      component: () => import("@/views/details"),
      meta: {
        title: "详情",
        // 缓存首页
        keepAlive: false
      }
    },
    {
      path: "/stake",
      component: () => import("@/views/stake"),
      meta: {
        title: "质押",
        // 缓存首页
        keepAlive: false
      }
    },
    {
      path: "/vote",
      component: () => import("@/views/vote"),
      meta: {
        title: "投票",
        // 缓存首页
        keepAlive: false
      }
    },
    {
      path: "/chain",
      component: () => import("@/views/crossChain"),
      meta: {
        title: "跨链",
        // 缓存首页
        keepAlive: false
      }
    }   
  ]
});

router.beforeEach((to, from, next) => {
  let { title, needLogin } = to.meta;
  let { isLogin } = store.state;
  document.title = title;

  if (needLogin && !isLogin) {
    next({
      path: "/login"
    });
  } else {
    next();
  }
});

export default router;
