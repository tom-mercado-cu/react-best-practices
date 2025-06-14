import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("avoid-prop-drilling", "routes/avoid-prop-drilling.tsx"),
  route("useeffect-initial-state", "routes/useeffect-initial-state.tsx")
] satisfies RouteConfig;
