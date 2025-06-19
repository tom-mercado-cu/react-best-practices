import { type RouteConfig, index, route } from "@react-router/dev/routes";

export const routesData = [
  {
    path: "/avoid-prop-drilling",
    name: "Avoid Prop Drilling",
    description: "Learn how to avoid prop drilling using composition patterns",
    badge: "State Management",
    componentPath: "routes/avoid-prop-drilling.tsx",
  },
  {
    path: "/useeffect-initial-state",
    name: "useEffect for Initial State",
    description: "Learn how to NOT use useEffect for initial state in React",
    badge: "State Management",
    componentPath: "routes/useeffect-initial-state.tsx",
  },
  {
    path: "/component-declared-in-component",
    name: "Component Declared in Component",
    description: "Learn what you should not do when declaring a component",
    badge: "Component Rendering",
    componentPath: "routes/component-rendering.tsx",
  },
  {
    path: "/share-state-with-react-query",
    name: "Share State with React Query",
    description:
      "Learn how to share state across components using React Query taking advantage of the cache",
    badge: "Data Fetching",
    componentPath: "routes/share-state-with-react-query.tsx",
  },
] as const;

export default [
  index("routes/home.tsx"),
  ...routesData.map((routeData) =>
    route(routeData.path, routeData.componentPath)
  ),
] satisfies RouteConfig;
