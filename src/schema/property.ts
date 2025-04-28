import { z } from "zod"

export const propertySchema = z.object({
  title: z.string().min(1, "Title is required"),
  status: z.string().min(1, "Status is required"),
  length: z.string().min(1, "Length is required"),
  width: z.string().min(1, "Width is required"),
  front: z.string().min(1, "Front is required"),
  direction: z.string().min(1, "Direction is required"),
  facing: z.string().min(1, "Facing is required"),
  unit: z.string().min(1, "Unit is required"),
  area: z.string().min(1, "Area is required"),
  price: z.string().min(1, "Price is required"),
  address: z.string().min(5, 'Please enter a valid address'),
  city: z.string().min(2, 'Please enter a valid city'),
  state: z.string().min(2, 'Please enter a valid state'),
  zip: z.string().regex(/^\d{6}?$/, 'Invalid ZIP code format'),
  description: z.string().min(1, "Description is required"),
  
  type: z.enum(['residential', 'commercial', 'agricultural']),
  // images: z.array(z.string()).min(1, "At least one image is required"),
})

export type PropertyFormValues = z.infer<typeof propertySchema>