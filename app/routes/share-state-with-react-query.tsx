import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";

const useGetCatFacts = () => {
  return useQuery({
    queryKey: ["cat-facts"],
    queryFn: () =>
      fetch("https://catfact.ninja/fact").then((res) => res.json()),
    refetchOnWindowFocus: false,
  });
};

const SkeletonText = () => <Skeleton className="h-4 w-[200px]" />;

const Child1 = () => {
  const { data, isPending } = useGetCatFacts();

  if (isPending) {
    return <SkeletonText />;
  }

  return (
    <Card className="border-blue-500 bg-blue-50 dark:bg-blue-900/20">
      <CardHeader className="pb-2">
        <CardTitle className="text-blue-600 dark:text-blue-400 flex items-center gap-2 text-lg">
          Child Component 1
          <Badge variant="outline" className="text-blue-600 dark:text-blue-400">
            Query 1
          </Badge>
        </CardTitle>
        <CardDescription>
          This component fetches cat facts using React Query
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-blue-600 dark:text-blue-300">
          <span className="font-medium">Cat Fact:</span> {data?.fact}
        </p>
      </CardContent>
    </Card>
  );
};

const Child2 = () => {
  const { data, isPending } = useGetCatFacts();

  if (isPending) {
    return <SkeletonText />;
  }

  return (
    <Card className="border-green-500 bg-green-50 dark:bg-green-900/20">
      <CardHeader className="pb-2">
        <CardTitle className="text-green-600 dark:text-green-400 flex items-center gap-2 text-lg">
          Child Component 2
          <Badge
            variant="outline"
            className="text-green-600 dark:text-green-400"
          >
            Query 2
          </Badge>
        </CardTitle>
        <CardDescription>
          This component uses the same query key, so it shares the cached data
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-green-600 dark:text-green-300">
          <span className="font-medium">Cat Fact:</span> {data?.fact}
        </p>
      </CardContent>
    </Card>
  );
};

const InvalidateButton = () => {
  const queryClient = useQueryClient();
  return (
    <Card className="border-amber-500 bg-amber-50 dark:bg-amber-900/20">
      <CardHeader className="pb-2">
        <CardTitle className="text-amber-600 dark:text-amber-400 flex items-center gap-2 text-lg">
          Cache Management
          <Badge
            variant="outline"
            className="text-amber-600 dark:text-amber-400"
          >
            Actions
          </Badge>
        </CardTitle>
        <CardDescription>
          Invalidate the cache to force a fresh API call
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          className="w-fit bg-amber-600 hover:bg-amber-700 text-white"
          onClick={() =>
            queryClient.invalidateQueries({ queryKey: ["cat-facts"] })
          }
        >
          Invalidate Cache
        </Button>
      </CardContent>
    </Card>
  );
};

export function meta() {
  return [
    { title: "Share State with React Query" },
    {
      name: "description",
      content: "Learn how to share state across components using React Query",
    },
  ];
}

export default function ShareStateWithReactQuery() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Sharing State with React Query
        </CardTitle>
        <CardDescription>
          This example demonstrates how React Query automatically shares cached
          data across components using the same query key, eliminating the need
          for prop drilling or global state management.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Child1 />
          <Child2 />
        </div>

        <InvalidateButton />

        <Card className="bg-muted/50 border-dashed">
          <CardHeader>
            <CardTitle className="text-lg">Key Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>
                <strong>Automatic Caching:</strong> Data is cached by query key
                and shared across components
              </li>
              <li>
                <strong>No Prop Drilling:</strong> Components can access the
                same data without passing props
              </li>
              <li>
                <strong>Background Updates:</strong> Stale data is automatically
                refetched in the background
              </li>
              <li>
                <strong>Loading States:</strong> Built-in loading and error
                states for better UX
              </li>
              <li>
                <strong>Cache Invalidation:</strong> Easy cache management with
                invalidation methods
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="text-blue-900 dark:text-blue-100">
              How It Works
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-800 dark:text-blue-200">
              Both components use the same query key{" "}
              <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">
                ["cat-facts"]
              </code>
              . When the first component fetches data, it's cached. The second
              component automatically receives the cached data without making
              another network request. Check the browser's Network tab to see
              only one API call is made!
            </p>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
