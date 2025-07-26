import { type RouteConfig, index, route } from "@react-router/dev/routes";
import { routes } from "virtual:react-router/server-build";

export default [index("routes/home.tsx"),
   route('/auth',
     'routes/auth.tsx'),] satisfies RouteConfig;
