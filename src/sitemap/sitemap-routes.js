import { createRoutes } from "react-router-sitemap";

const routes = createRoutes([
  {
    path: "/",
    priority: 1.0,
  },
  {
    path: "/login",
    priority: 0.8,
  },
  {
    path: "/register",
    priority: 0.8,
  },
  {
    path: "/ProductId/:id",
    priority: 0.7,
    params: [
      { id: "1" },
      { id: "2" },
      { id: "3" },
      // Add more product IDs as needed
    ],
  },
]);

export default routes;
