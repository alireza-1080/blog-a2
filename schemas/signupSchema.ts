import z from "zod";

const signupSchema = z
  .object({
    username: z
      .string({
        required_error: "Username field is required",
        invalid_type_error: "Username must be a string",
      })
      .min(5, { message: "Username must be 5 characters at least" })
      .max(15, { message: "Username must be 15 characters max" })
      .regex(/^[a-zA-Z][a-zA-z0-9_-]*$/, {
        message:
          "Username must start with a letter and contain only letters, numbers, underscores, and hyphens",
      })
      .refine((value) => !/[-_]{2,}/.test(value), {
        message: "Username cannot contain consecutive special characters",
      })
      .transform((username) => username.toLocaleLowerCase()),
    email: z
      .string({
        required_error: "Email field is required",
        invalid_type_error: "Email must be a string",
      })
      .email({ message: "Invalid email format" })
      .min(5, { message: "Email is too short" })
      .max(254, { message: "Email is too long" })
      .transform((email) => email.toLocaleLowerCase()),
    password: z
      .string({
        invalid_type_error: "Password should ba a string",
        required_error: "Password field is required",
      })
      .min(8, "Password must be at least 8 characters")
      .max(100, "Password cannot exceed 100 characters")
      .refine((password) => /[A-Z]/.test(password), {
        message: "Password must contain at least one uppercase letter",
      })
      .refine((password) => /[a-z]/.test(password), {
        message: "Password must contain at least one lowercase letter",
      })
      .refine((password) => /[0-9]/.test(password), {
        message: "Password must contain at least one number",
      })
      .refine((password) => /[^A-Za-z0-9]/.test(password), {
        message: "Password must contain at least one special character",
      })
      .refine((password) => !/(.)\1{2,}/.test(password), {
        message: "Password cannot contain repeated characters (more than 2)",
      }),
    confirmPassword: z.string({
      invalid_type_error: "Confirm password should ba a string",
      required_error: "Confirm password field is required",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default signupSchema;
