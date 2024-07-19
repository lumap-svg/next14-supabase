"use client";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";
import { SubmitButtonProps } from "@/lib/definitions";
export function SubmitButton({ loading, label }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button variant={"outline"} disabled={pending}>
      {pending ? loading : label}
    </Button>
  );
}
