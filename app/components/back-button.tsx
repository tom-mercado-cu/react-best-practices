import { ArrowLeftIcon } from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import { Button } from "./ui/button";

export const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";

  if (isHome) {
    return null;
  }

  return (
    <div className="container mx-auto pt-2">
      <Button onClick={() => navigate(-1)} className="w-fit" variant="ghost">
        <ArrowLeftIcon className="w-4 h-4" />
        Back
      </Button>
    </div>
  );
};
