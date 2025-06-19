import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Example1, Example2 } from "~/useeffect-initial-state/example";

export function meta() {
  return [
    { title: "useEffect for Initial State" },
    {
      name: "description",
      content: "Learn how to NOT use useEffect for initial state in React",
    },
  ];
}

export default function UseEffectInitialState() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>useEffect for Initial State</CardTitle>
        <CardDescription>
          This example shows the difference between using useEffect for derived
          state vs. calculating it directly during render.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="example1" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="example1">With useEffect</TabsTrigger>
            <TabsTrigger value="example2">Direct Calculation</TabsTrigger>
          </TabsList>
          <TabsContent value="example1" className="mt-6">
            <div className="p-4 border rounded-lg">
              <h3 className="text-lg font-medium mb-2">
                Using useEffect for derived state:
              </h3>
              <div className="p-4 bg-muted/50 rounded">
                <Example1 />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="example2" className="mt-6">
            <div className="p-4 border rounded-lg">
              <h3 className="text-lg font-medium mb-2">
                Direct calculation during render:
              </h3>
              <div className="p-4 bg-muted/50 rounded">
                <Example2 />
              </div>
            </div>
          </TabsContent>
        </Tabs>
        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <h3 className="font-medium text-amber-900 mb-2">Key Points:</h3>
          <ul className="list-disc pl-5 space-y-1 text-amber-800">
            <li>Check the browser console to see the number of re-renders</li>
            <li>
              Both examples achieve the same result but with different
              approaches
            </li>
            <li>
              The first example uses an unnecessary useEffect and extra state
            </li>
            <li>
              The second example is more efficient with direct calculation
            </li>
            <li>Check the browser console to see the number of re-renders</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
