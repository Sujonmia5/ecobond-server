import { z } from "zod";

export const authZodSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8).max(20),
  })
  .strict();

export const UpdatePasswordSchema = z.object({
  newPassword: z
    .string()
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/, {
      message:
        "Password must be at least 8 characters long, include one letter, one number, and one special character (@, #, $, %, ^, &, *, or !)",
    })
    .nonempty({ message: "Password is required" }),
  contact: z.string().regex(/^\+?\d{10,15}$/, {
    message: "Contact must be a valid phone number (10-15 digits)",
  }),
});
