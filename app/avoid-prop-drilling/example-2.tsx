import { useState } from "react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";

const GrandsonComponent = ({ importantThing }: { importantThing: string }) => {
  return (
    <Card className="border-blue-500 bg-blue-50 dark:bg-blue-900/20">
      <CardHeader className="pb-2">
        <CardTitle className="text-blue-600 dark:text-blue-400 flex items-center gap-2 text-lg">
          Grandchild Component
        </CardTitle>
        <CardDescription>
          Notice how the grandchild component doesn't need to know anything about
          the important message or any content rendered into it, while still
          maintaining the same layout
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-blue-600 dark:text-blue-300">
          <span className="font-medium">Important Message:</span>{" "}
          {importantThing}
        </p>
      </CardContent>
    </Card>
  );
};

const ChildrenComponent = ({
  count,
  children,
}: {
  count: number;
  children: React.ReactNode;
}) => {
  return (
    <Card className="border-red-500 bg-red-50 dark:bg-red-900/20">
      <CardHeader className="pb-2">
        <CardTitle className="text-red-600 dark:text-red-400 flex items-center gap-2">
          Child Component <Badge variant="outline">Count: {count}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-red-600 dark:text-red-300">
            This component receives the count prop and passes it down.
          </p>
          {children}
        </div>
      </CardContent>
    </Card>
  );
};

export function Example2() {
  const [count, setCount] = useState(0);
  const [importantThing, setImportantThing] = useState(
    "This message is passed through multiple components to demonstrate prop drilling"
  );

  return (
    <div className="h-full flex flex-col">
      <Card className="shadow-lg flex-1 flex flex-col">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Prop Drilling Example
          </CardTitle>
          <p>
            This example shows how props are passed down through multiple
            components
          </p>
        </CardHeader>
        <CardContent className="space-y-4 flex-1 flex flex-col">
          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div>
              <p className="font-medium">
                Current Count: <span className="font-bold">{count}</span>
              </p>
              <p className="text-sm text-muted-foreground">
                Press the button to increment the counter
              </p>
            </div>
            <Button onClick={() => setCount(count + 1)}>Increment Count</Button>
          </div>

          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div className="w-full">
              <p className="font-medium mb-2">Important Message</p>
              <Input
                value={importantThing}
                onChange={(e) => setImportantThing(e.target.value)}
                placeholder="Type an important message..."
                className="w-full"
              />
            </div>
          </div>

          <div className="mt-6 space-y-6">
            <h3 className="text-lg font-medium">Component Hierarchy:</h3>
            <div className="space-y-6 flex-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Parent Component</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-4">
                    <p>
                      This is the top-level component that manages the state and
                      passes it down.
                    </p>
                  </div>
                  <ChildrenComponent count={count}>
                    <GrandsonComponent importantThing={importantThing} />
                  </ChildrenComponent>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
