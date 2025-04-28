import { z } from "zod"

export const ticketSchema = z.object({
  subject: z.string().min(1, "Subject is required"),
  description: z.string().min(1, "Description is required"),
  files:z.array(z.string()).optional(),
})

export type TicketFormValues = z.infer<typeof ticketSchema>


export const faqSchema = z.object({
    question: z.string().min(1, "Question is required"),
    answer: z.string().min(1, "Answer is required"),
  })
  
  export type FaqFormValues = z.infer<typeof faqSchema>
  
  