import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { ComponentRenderingExample } from "~/component-rendering/example";

export function meta() {
  return [
    { title: "Component Rendering in React" },
    {
      name: "description",
      content: "Understanding component rendering and state management in React",
    },
  ];
}

export default function ComponentRendering() {
  return (
    <div className="container mx-auto p-8">
      <Card>
        <CardHeader>
          <CardTitle>Component Rendering in React</CardTitle>
          <CardDescription>
            This example demonstrates how component definition affects state and re-renders
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ComponentRenderingExample />
        </CardContent>
      </Card>
    </div>
  );
}
