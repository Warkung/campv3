"use server";

import { z } from "zod";

const profileSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  username: z.string().min(1, { message: "username is required" }),
});

const createProfileAction = async (prevState: any, formData: FormData) => {
  const firstName = formData.get("firstName");
  profileSchema.parse({
    firstName,
  });

  console.log(`Hello from server: ${firstName}`);
  return { message: "Create Profile Success!" };
};

export default createProfileAction;
