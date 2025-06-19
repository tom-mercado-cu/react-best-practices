import { Link } from "react-router";
import { GithubRepositoryButton } from "~/components/github-repository-button";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { routesData } from "~/routes";

export function meta() {
  return [
    { title: "React Best Practices" },
    {
      name: "description",
      content: "Learn React best practices with interactive examples",
    },
  ];
}

export default function Home() {
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
              {routesData.map((route, index) => (
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
                  <GithubRepositoryButton
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    path="/"
                  />
                </a>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
