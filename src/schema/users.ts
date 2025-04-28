import { z } from "zod"
export const profileSchema = z.object({
    username: z.string().min(2, "Username must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    u_pfp:z.string().optional(),
    businessName: z.string().optional(),
    businessType: z.string().optional(),
    description: z.string().optional(),
    foundedYear: z.string().optional(),
    employees: z.string().optional(),
    website: z.string().url("Must be a valid URL").optional().or(z.literal("")),
    socialMedia: z.object({
      linkedin: z.string().url("Must be a valid URL").optional().or(z.literal("")),
      instagram: z.string().url("Must be a valid URL").optional().or(z.literal(""))
    }),
    address: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    zip: z.string().optional(),
    services: z.array(z.string()),
    phone: z.string().optional(),
    whatsAppPhone: z.string().optional()
  });
  
export type ProfileSchemaType = z.infer<typeof profileSchema>;