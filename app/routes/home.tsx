import { Link, useLoaderData } from "react-router";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export function meta() {
  return [
    { title: "React Best Practices" },
    {
      name: "description",
      content: "Learn React best practices with interactive examples",
    },
  ];
}

export async function loader() {
  // In a real app, you might want to fetch this from your router config
  return {
    routes: [
      {
        path: "/avoid-prop-drilling",
        name: "Avoid Prop Drilling",
        description:
          "Learn how to avoid prop drilling using composition patterns",
        badge: "State Management",
      },
      {
        path: "/useeffect-initial-state",
        name: "useEffect Initial State",
        description: "Understanding useEffect and initial state management",
        badge: "Hooks",
      },
      {
        path: "/component-rendering",
        name: "Component Rendering",
        description: "Learn about component rendering and state preservation",
        badge: "Performance",
      },
      {
        path: "/share-state-with-react-query",
        name: "Share State With React Query",
        description: "Share state across components using React Query caching",
        badge: "Data Fetching",
      },
    ],
  };
}

export default function Home() {
  const { routes } = useLoaderData<{
    routes: Array<{
      path: string;
      name: string;
      description: string;
      badge: string;
    }>;
  }>();

  return (
    <div className="container mx-auto p-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold mb-2">
            React Best Practices
          </CardTitle>
          <CardDescription className="text-lg">
            Interactive examples demonstrating modern React patterns and best
            practices
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-muted-foreground">
              Available Examples
            </h3>
            <div className="space-y-3">
              {routes.map((route, index) => (
                <Link
                  key={route.path}
                  className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors duration-200"
                  to={route.path}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-lg">{route.name}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {route.badge}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {route.description}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="text-blue-900 dark:text-blue-100 flex items-center gap-2">
                📚 Source Code & Resources
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-blue-800 dark:text-blue-200">
                Explore the complete source code and contribute to this project
                on GitHub.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://github.com/tom-mercado-cu/react-best-practices"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View on GitHub
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
