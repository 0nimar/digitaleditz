import { z } from "zod"

export const onboardingSchema = z.object({
  
  businessName: z.string().min(2, 'Business name must be at least 2 characters'),
  businessType: z.enum(['residential', 'commercial', 'agricultural' ,'all'], {
    required_error: 'Please select a business type',
  }),
  description: z.string().min(10, 'Description must be at least 10 characters'), 
  foundedYear: z.string().min(4, 'Please enter a valid year').regex(/^\d{4}$/, 'Invalid year format'),
  employees: z.enum(['1-10', '10-50', '50-200', '200+']),
  website: z.string().url('Please enter a valid URL'),
  socialMedia: z.object({
    linkedin: z.string().optional(),
    instagram: z.string().optional()
  }),

  address: z.string().min(5, 'Please enter a valid address'),
  city: z.string().min(2, 'Please enter a valid city'),
  state: z.string().min(2, 'Please enter a valid state'),
  zip: z.string().regex(/^\d{6}?$/, 'Invalid ZIP code format'),
  
  services: z.array(z.string()).min(1, 'Select at least one service'),
  phone: z.string().regex(/^\d{10}$/, 'Phone number must be 10 digits'),
  whatsAppPhone: z.string().regex(/^\d{10}$/, 'WhatsApp number must be 10 digits').optional(),
  email: z.string().email('Invalid email address'),

})

export type OnboardingFormData = z.infer<typeof onboardingSchema>
