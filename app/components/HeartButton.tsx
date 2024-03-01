"use client";

import { Button } from "@/components/ui/button";
import { Heart, Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

const HeartButton = () => {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button variant="outline" size="icon" disabled className="bg-none">
          <Loader2 className="h-4 w-r animate-spin text-primary" />
        </Button>
      ) : (
        <Button variant="outline" size="icon" type="submit" className="bg-none">
          <Heart className="w-4 h-4" />
        </Button>
      )}
    </>
  );
};

export default HeartButton;
