import { useLocation } from "react-router";
import { routesData } from "~/routes";
import { GithubRepositoryButton } from "./github-repository-button";

export const GithubRepositoryButtonForRoute = () => {
  const location = useLocation();
  const path = routesData.find(
    (route) => route.path === location.pathname
  )?.componentPath;
  const isHome = location.pathname === "/";

  if (!path || isHome) {
    return null;
  }

  return <GithubRepositoryButton path={`/blob/main/app/${path}`} />;
};
