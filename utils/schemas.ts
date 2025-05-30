import { z, ZodSchema } from "zod";

const profileSchema = z.object({
  firstName: z
    .string()
    .min(2, "First Name must be at least 2 characters long "),
  lastName: z.string().min(2, "Last Name must be at least 2 characters long "),
  username: z.string().min(2, "Username must be at least 2 characters long "),
});

const validateWithZod = <T>(schema: ZodSchema<T>, data: unknown): T => {
  const result = schema.safeParse(data);
  if (!result.success) {
    throw new Error(result.error.errors.map((e) => e.message).join("|"));
  }
  return result.data;
};

export { profileSchema, validateWithZod };
