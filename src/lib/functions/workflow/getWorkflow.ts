import { getAllWorkflowApi, getWorkflowApi } from "@/lib/functionapis/workflow/workflow";

export const getWorkflow = async ({ workflowId }: { workflowId: string;}) => {
    const workflow = await getWorkflowApi({workflowId});
    
    return workflow.data;
  }
export const getAllWorkflows= async () => {
  const workflow = await getAllWorkflowApi();
 
    return workflow.data;
}