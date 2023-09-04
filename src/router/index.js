import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "\u2015 Dashboard",
    component: HomeView,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/login",
    name: "\u2015 Log-in",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/register",
    name: "\u2015 Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/RegisterView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = "MEVN Stack" + to.name;
  const authRequired = to.matched.some((route) => route.meta.authRequired);
  if (!authRequired) return next();
  if (localStorage.getItem("user")) {
    next();
  } else {
    next("/login");
  }
});

export default router;
