import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/home/HomePage.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login-page/LoginPage.vue"),
    },
  ],
});

export default router;
