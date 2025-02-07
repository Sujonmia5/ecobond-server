import express, { Router } from "express";
import { userRoutes } from "../modules/user/user.route";
import { authRoutes } from "../modules/auth/auth.route";
import { postRoutes } from "../modules/post/post.route";
import { commentRoutes } from "../modules/comment/comment.route";

type TRoute = {
  path: string;
  route: Router;
};

const routes = express.Router();

const moduleRoutes: TRoute[] = [
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/users",
    route: userRoutes,
  },
  {
    path: "/posts",
    route: postRoutes,
  },
  {
    path: "/comments",
    route: commentRoutes,
  },
];

moduleRoutes.forEach((route) => {
  routes.use(route.path, route.route);
});
export default routes;
