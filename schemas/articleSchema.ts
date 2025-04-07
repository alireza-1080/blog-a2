import z from "zod";

const articleSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, { message: "Title is required" })
    .max(100, { message: "Title cannot exceed 100 characters" }),
  content: z
    .string()
    .trim()
    .min(1, { message: "Content is required" })
    .max(10_000, { message: "Content cannot exceed 10,000 characters" }),
});

export default articleSchema;
