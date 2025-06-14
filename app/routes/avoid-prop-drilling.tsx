import { Example1 } from "~/avoid-prop-drilling/example-1";
import { Example2 } from "~/avoid-prop-drilling/example-2";

export function meta() {
  return [
    { title: "Avoiding Prop Drilling" },
    {
      name: "description",
      content: "Learn how to avoid prop drilling in React",
    },
  ];
}

export default function AvoidPropDrilling() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Avoiding Prop Drilling</h1>
      <p className="text-lg mb-4">
        This page demonstrates how to avoid prop drilling in React applications.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-full flex flex-col">
          <Example1 />
        </div>
        <div className="h-full flex flex-col">
          <Example2 />
        </div>
      </div>
    </div>
  );
}
