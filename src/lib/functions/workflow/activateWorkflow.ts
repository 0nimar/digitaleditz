import { activateworkflowapi } from "@/lib/functionapis/workflow/workflow";
import { ActivateFlowData } from "@/types/workflow";

export default async function handleActivateWorkflow(phone_number:string,workflow_id:string) {
try {
  const response = await activateworkflowapi(phone_number,workflow_id);
  console.log(response)
  return response
} catch (error) {
  console.error(error)
}  
}