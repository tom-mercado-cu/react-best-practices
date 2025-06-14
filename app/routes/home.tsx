import { Link, useLoaderData } from "react-router";

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
  // In a real app, you might want to fetch this from your router config
  return {
    routes: [
      { path: "/avoid-prop-drilling", name: "Avoid Prop Drilling" },
      { path: "/useeffect-initial-state", name: "useEffect Initial State" },
    ],
  };
}

export default function Home() {
  const { routes } = useLoaderData<{
    routes: Array<{ path: string; name: string }>;
  }>();

  return (
    <div className="container mx-auto p-8">
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Available Routes</h2>
        <ul className="list-disc pl-6 space-y-2">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                to={route.path}
                className="text-blue-600 hover:underline hover:text-blue-800"
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
