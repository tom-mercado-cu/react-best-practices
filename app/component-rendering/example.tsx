import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

// Problematic implementation - Child component is recreated on every render
function ParentProblem({ parentCount }: { parentCount: number }) {
  const Counter = () => {
    const [count, setCount] = useState(0);
    console.log("Child component recreated");

    return (
      <Card className="bg-blue-50 border-blue-200">
        <CardContent>
          <p className="text-blue-900">
            Child count: {count} (this resets when parent re-renders)
          </p>
          <Button
            className="mt-2"
            onClick={() => setCount((count) => count + 1)}
          >
            Add 1 to child count
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-4">
      <Counter />
      <p className="text-muted-foreground">
        Parent count (from props): {parentCount}
      </p>
    </div>
  );
}

// Fixed implementation - Child component is stable
function ParentSolution({ parentCount }: { parentCount: number }) {
  return (
    <div className="space-y-4">
      <StableCounter />
      <p className="text-muted-foreground">
        Parent count (from props): {parentCount}
      </p>
    </div>
  );
}

// Stable counter component that won't be recreated
function StableCounter() {
  const [count, setCount] = useState(0);
  console.log("Stable child component rendered");

  return (
    <Card className="bg-green-50 border-green-200">
      <CardContent>
        <p className="text-green-900">
          Stable child count: {count} (preserved during parent re-renders)
        </p>
        <Button className="mt-2" onClick={() => setCount((count) => count + 1)}>
          Add 1 to stable child count
        </Button>
      </CardContent>
    </Card>
  );
}

export function ComponentRenderingExample() {
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Problematic Example</CardTitle>
        </CardHeader>
        <CardContent>
          <ParentProblem parentCount={count} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Solution Example</CardTitle>
        </CardHeader>
        <CardContent>
          <ParentSolution parentCount={count} />
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Button variant="default" onClick={() => setCount((cnt) => cnt + 1)}>
          Increment Parent Count (causes re-render)
        </Button>
      </div>

      <Card className="bg-amber-50 border-amber-200">
        <CardHeader>
          <CardTitle className="text-amber-900">Key Points</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2 text-amber-800">
            <li>
              Click the buttons in the blue/green cards to increment the child
              counters
            </li>
            <li>
              Click the "Increment Parent Count" button to trigger a parent
              re-render
            </li>
            <li>
              Notice how the blue counter resets (it's recreated on each render)
            </li>
            <li>
              The green counter maintains its state across parent re-renders
            </li>
            <li>
              Check the browser console to see component recreation/rendering
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
