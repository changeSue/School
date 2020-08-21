import Vue from "vue";
import Router from "vue-router";
import pub from "./pub.js";

Vue.use(Router);

var router = new Router({
  // 配置路由对象
  routes: [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/login",
    component: () => import("@/views/login/index")
  },
  {
    path: "/register",
    component: () => import("@/views/register/index")
  },
  {
    path: "/404",
    component: () => import("@/views/pub/404/index")
  },
  {
    path: "/401",
    component: () => import("@/views/pub/401/index")
  },
  {
    path: "/home",
    component: () => import("@/views/index"),
    children: [].concat(pub) // 在这里引入注册模块的路由
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("@/views/admin/AdminIndex")
  },
  {
    path: "/admin/dashboard",
    name: "Dashboard",
    component: () => import("@/views/admin/dashboard/admin/index")
  },
  {
    path: "/admin/content/management",
    name: "ArticleManagement",
    component: () => import("@/views/admin/content/ArticleManagement")
  },
  {
    path: "/admin/content/editor",
    name: "Editor",
    component: () => import("@/views/admin/content/ArticleEditor")
  },
  {
    path: "/admin/user/UserProfile",
    name: "UserProfile",
    component: () => import("@/views/admin/user/UserProfile")
  }, ]
});

// 所有角色都可以访问的页面
// export const routes = [
//   {
//     path: '/',
//     redirect: '/login'
//   },
//   {
//     path: '/login',
//     component: () => import('@/views/pub/login/index')
//   },
//   {
//     path: '/register',
//     component: () => import('@/views/pub/register/index')
//   },
//   {
//     path: '/404',
//     component: () => import('@/views/pub/404/index')
//   },
//   {
//     path: '/401',
//     component: () => import('@/views/pub/401/index')
//   },
//   {
//     path: '/home',
//     component: () => import('@/views/index'),
//     children: [].concat(pub) // 在这里引入注册模块的路由
//   }
// ]
// // 需动态判断权限的路由
// export const asyncRoutes = [
//   {
//     path: '/home',
//     component: () => import('@/views/pub/index'),
//     children: [].concat(pub) // 在这里引入注册模块的路由
//   },
//   { path: '*', redirect: '/404',  }
// ]

// const createRouter = () => new Router({
//   routes
//   scrollBehavior: () => ({
//     y: 0
//   }),
//   // mode:"history",
//   routes: constantRoutes || store.getters.permission_routes
// })

// const router = createRouter()

// export function resetRouter() {
//   const newRouter = createRouter()
//   router.matcher = newRouter.matcher // reset router
// }

// 未登陆的用户会被自动导航到login
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login' || to.path === '/loginon') {
//     next()
//     return
//   }
//   var token = store.getters.token || JSON.parse(sessionStorage.getItem('store')).user.token;
//   if (isEmpty(token)) {
//     router.push('/login')
//     return
//   }
//   next()
// })
export default router;