import { createRouter, createWebHistory } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import routes from "~pages";

const layoutRoutes = setupLayouts(routes);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: layoutRoutes,
});

export default router;
