import Home from "@/views/Home.vue";
import Todo from "@/views/Todo.vue";
import Finance from "@/views/Finance.vue";
import Calendar from "@/views/Calendar.vue";
import Settings from "@/views/Settings.vue";

import { createWebHistory, createRouter } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", name: "Home", component: Home },
    { path: "/todo", name: "Todo", component: Todo },
    { path: "/finance", name: "Finance", component: Finance },
    { path: "/calendar", name: "Calendar", component: Calendar },
    { path: "/settings", name: "Settings", component: Settings },
  ],
});

export default router;
