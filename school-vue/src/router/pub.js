const pub = [
  {
    path: "/pub/news/list",
    component: () => import("@/views/pub/news/list")
  },
  {
    path: "/pub/news/article",
    component: () => import("@/views/pub/news/ArticleDetails")
  },
  {
    path: "/pub/abstract",
    component: () => import("@/views/pub/abstract/index")
  },
  {
    path: "/pub/quick",
    component: () => import("@/views/pub/quick/index")
  },
  {
    path: "/pub/abstract/details",
    component: () => import("@/views/pub/abstract/details/index")
  },
  {
    path: "/pub/student",
    component: () => import("@/views/pub/student/list")
  },
  {
    path: "/pub/grade",
    component: () => import("@/views/pub/grade/list")
  },
  {
    path: "/pub/teacher",
    // component: () => import('@/views/pub/line/index')
    component: () => import("@/views/pub/teacher/list")
  },
  {
    path: "/pub/down",
    component: () => import("@/views/pub/down/list")
  },
  {
    path: "/pub/aboutus",
    component: () => import("@/views/pub/aboutus/index")
  }
];

export default pub;
