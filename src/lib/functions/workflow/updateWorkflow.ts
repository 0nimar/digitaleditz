import { getWorkflowApi, updateWorkflowApi } from "@/lib/functionapis/workflow/workflow";
import { WorkflowStatus } from "@/types/workflow";
import { revalidatePath } from "next/cache";

export const UpdateWorkflow=async({workflowId,definition}:{workflowId:string,definition:string})=>{
    try{
    // const result=await getWorkflowApi({workflowId});
    // if(!result){
    //     throw new Error("Failed to create new workflow");
    // }
    // // if(result.status !== WorkflowStatus.DRAFT){
    // //     throw new Error("Workflow is not a Draft");
    // // }
    console.log("workflowId",workflowId);
    console.log("definition",definition);
    const response=await updateWorkflowApi({def:definition,Id:workflowId});
    console.log("00000000000000000000000000");
    console.log("response",response);
    console.log("##########################");
    return true;
 }
 catch(e){
    console.error("Something went Wrong",e)
    throw new Error("Failed to update new workflow")
 }
}