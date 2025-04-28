
import { ActivateFlowData, WorkFlow, WorkflowData } from "@/types/workflow";

import apiClient from "../apiclient";
import apiClientNew from "../apiclientnew";
export const getWorkflowApi = async ({ workflowId }: { workflowId: string; }) => {
  const workflow =await apiClient.get(`/workflow/get/${workflowId}`)
    return workflow;
}
export const getAllWorkflowApi = async () => {
  const workflow =await apiClientNew.get(`/workflow/getall`)
    return workflow;
}

export async function updateWorkflowApi({ def, Id }: { def: string; Id: string;}){
  const newData={
    'id':Id,
    'definition':def}
  console.log("@NEWData",newData);
  const response=await apiClientNew.post(`/workflow/update/`,newData);
  console.log("response",response);
  if(response.status !== 200){
    throw new Error("Failed to update workflow")
  }
  // revalidatePath(`/workflow/${id}`)
return response.data;
}
export async function createnewworkflow({Data}:{Data:WorkflowData}){
try{
const response=await apiClient.post('/workflow/create',Data)
console.log("response",response);
return response.data
}
catch(e){
console.error("Something went Wrong",e)
}
}
export async function activateworkflowapi(phone_number:string,workflow_id:string){
  try{
  const response=await apiClientNew.post('/whatsapp/assign-execution',null,{params: {
    phone_number,
    workflow_id
}})
  console.log("response",response);
  return response.data
  }
  catch(e){
  console.error("Something went Wrong",e)
  }
  } 