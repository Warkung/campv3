"use server";

import { validateWithZod, profileSchema } from "@/utils/schemas";

const createProfileAction = async (prevState: any, formData: FormData) => {
  try {
    const rawData = Object.fromEntries(formData);
    const validatedData = validateWithZod(profileSchema, rawData);
    console.log(validatedData);

    return { message: "Create Profile Success!" };
  } catch (error) {
    if (error instanceof Error) {
      return { message: error.message };
    } else {
      return { message: "Something went wrong!" };
    }
  }
};

export default createProfileAction;
