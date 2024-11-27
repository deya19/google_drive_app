"use client";

import { z } from "zod";

export type FormType = "sign-in" | "sign-up";
export const authFormSchema = (formType: FormType) => {
  return z.object({
    email: z.string().email(),
    fullName:
      formType === "sign-up"
        ? z.string().min(2).max(50)
        : z.string().optional(),
  });
};