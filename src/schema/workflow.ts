import {z,infer as zodInfer} from 'zod';
export const createWorkFlowSchema = z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string().optional(),
    isTemplate: z.boolean().default(false).optional(),
    color: z.enum(['blue', 'red', 'green', 'purple', 'orange','none']).default('none').optional()
});

export type CreateWorkflowSchemaType = zodInfer<typeof createWorkFlowSchema>;

export const activateWorkFlowSchema = z.object({
   
    whatsappNumber: z.string().min(1, "Whatsapp Number is required"),
   
});

export type ActivateWorkflowSchemaType = zodInfer<typeof activateWorkFlowSchema>;

export const disableWorkFlowSchema = z.object({
    whatsappNumber: z.string().min(1, "Whatsapp Number is required"),
   
   
});

export type DisableWorkflowSchemaType = zodInfer<typeof disableWorkFlowSchema>;