import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("avoid-prop-drilling", "routes/avoid-prop-drilling.tsx")
] satisfies RouteConfig;
