import { GithubIcon } from "lucide-react";
import { Button } from "./ui/button";

const GITHUB_REPO_URL =
  "https://github.com/tom-mercado-cu/react-best-practices";

export const GithubRepositoryButton = ({
  path,
  className,
}: {
  path: string;
  className?: string;
}) => {
  return (
    <a
      href={`${GITHUB_REPO_URL}/${path}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button className={className}>
        <GithubIcon className="w-4 h-4" />
        View on GitHub
      </Button>
    </a>
  );
};
