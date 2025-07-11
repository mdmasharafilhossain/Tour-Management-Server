
import { Router } from "express";
import { UsersRoute } from "../modules/user/user.routes";


export const router = Router();


const moduleRoutes = [
    {
      path: "/user",
      route: UsersRoute,
    },

];

moduleRoutes.forEach((route) => {
    router.use(route.path, route.route);
});
