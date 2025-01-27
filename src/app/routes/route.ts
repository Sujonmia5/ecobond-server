import express, { Router } from "express";
import { userRoutes } from "../modules/user/user.route";

type TRoute = {
  path: string;
  route: Router;
};

const routes = express.Router();

const moduleRoutes: TRoute[] = [
  {
    path: "/users",
    route: userRoutes,
  },
];

moduleRoutes.forEach((route) => {
  routes.use(route.path, route.route);
});
export default routes;
