"use server";

import { validateWithZod, profileSchema } from "@/utils/schemas";

const renderError = (error: unknown): { message: string } => {
  return {
    message: error instanceof Error ? error.message : "Something went wrong!",
  };
};

const createProfileAction = async (prevState: any, formData: FormData) => {
  try {
    const rawData = Object.fromEntries(formData);
    const validatedData = validateWithZod(profileSchema, rawData);
    console.log(validatedData);

    return { message: "Create Profile Success!" };
  } catch (error) {
    return renderError(error);
  }
};

export default createProfileAction;
