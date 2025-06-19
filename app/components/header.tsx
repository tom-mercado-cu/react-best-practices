import { Link } from "react-router";

export const Header = () => {
  return (
    <header className="bg-background/50 dark:bg-background/50 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <Link to="/" className="text-2xl font-bold">
          React Best Practices
        </Link>
      </div>
    </header>
  );
};
