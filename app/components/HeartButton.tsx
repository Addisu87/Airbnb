"use client";

import { Button } from "@/components/ui/button";
import { Heart, Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

interface HeartButtonProps {
  isDelete?: boolean;
}

const HeartButton: React.FC<HeartButtonProps> = ({ isDelete }) => {
  const { pending } = useFormStatus();

  return (
    <Button
      variant="ghost"
      size="icon"
      type="submit"
      className={`cursor-pointer ${
        pending ? "cursor-not-allowed" : ""
      } text-primary-foreground border-neutral-500/70 `}
      disabled={pending}
    >
      {pending ? (
        <Loader2 className="h-5 w-5 animate-spin text-primary" />
      ) : (
        <Heart
          className={`w-5 h-5 ${isDelete ? "text-primary" : ""}`}
          fill={isDelete ? "#E21C49" : "#A9A9A9"}
        />
      )}
    </Button>
  );
};

export const AddHeartButton: React.FC = () => <HeartButton />;

export const DeleteHeartButton: React.FC = () => <HeartButton isDelete />;
