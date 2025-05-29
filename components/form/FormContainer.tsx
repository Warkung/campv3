"use client";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

type FormContainerProps = {
  children: React.ReactNode;
  action: (prevState: any, formData: FormData) => Promise<{ message: string }>;
};

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
