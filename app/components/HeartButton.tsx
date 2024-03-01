"use client";

import { Button } from "@/components/ui/button";
import { Heart, Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

const HeartButton = () => {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button variant="outline" size="icon" disabled>
          <Loader2 />
        </Button>
      ) : (
        <Button variant="outline" size="icon" type="submit">
          <Heart className="w-4 h-4" />
        </Button>
      )}
    </>
  );
};

export default HeartButton;
