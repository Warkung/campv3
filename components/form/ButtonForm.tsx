"use client";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { Loader } from "lucide-react";
import { ButtonFormProps } from "@/utils/types";

function ButtonForm({ title, size, type }: ButtonFormProps) {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} size={size} type={type}>
      {pending ? <Loader className="animate-spin" /> : title}
    </Button>
  );
}
export default ButtonForm;
