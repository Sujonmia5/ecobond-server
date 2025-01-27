import { z } from "zod";

// Name Schema
export const UserNameSchema = z.object({
  firstName: z.string().nonempty({ message: "First name is required" }),
  middleName: z.string().optional().or(z.literal("")),
  lastName: z.string().nonempty({ message: "Last name is required" }),
});

// User Schema
export const UserSchema = z
  .object({
    name: UserNameSchema,
    email: z
      .string()
      .email({ message: "Invalid email address" })
      .nonempty({ message: "Email is required" }),
    password: z
      .string()
      .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/, {
        message:
          "Password must be at least 8 characters long, include one letter, one number, and one special character (@, #, $, %, ^, &, *, or !)",
      })
      .nonempty({ message: "Password is required" }),
    contact: z.string().regex(/^\+?\d{10,15}$/, {
      message: "Contact must be a valid phone number (10-15 digits)",
    }),
    profileImage: z.string().nonempty({ message: "Profile image is required" }),
    followersId: z.array(z.string()).default([]),
  })
  .strict();
export default { UserSchema };
