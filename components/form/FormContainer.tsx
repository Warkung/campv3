"use client";
import { FormContainerProps } from "@/utils/types";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";


const initialState = { message: "" };

function FormContainer({ children, action }: FormContainerProps) {
  const [state, formAction] = useActionState(action, initialState);
  console.log(state);

  useEffect(() => {
    if (state.message) {
      toast.success(state.message);
    }
  }, [state]);
  return <form action={formAction}>{children}</form>;
}
export default FormContainer;
