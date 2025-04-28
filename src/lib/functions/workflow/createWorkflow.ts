import { CreateFlowNode } from "@/app/(pages)/(user)/workflows/_components/CreateFlowNode";
import { createnewworkflow } from "@/lib/functionapis/workflow/workflow";
import { CreateWorkflowSchemaType, createWorkFlowSchema } from "@/schema/workflow";
import { AppNode } from "@/types/appNode";
import { TaskType } from "@/types/task";
import { WorkflowStatus } from "@/types/workflow";
import { Edge } from "@xyflow/react";

export const CreateWorkflow=async(form:CreateWorkflowSchemaType )=>{
    const {success,data}=createWorkFlowSchema.safeParse(form);
    if(!success){
        throw new Error("invalid form data")
    }
    
    const initialFlow:{nodes:AppNode[];edges:Edge[]}={nodes:[],edges:[]};
    initialFlow.nodes.push(CreateFlowNode(TaskType.START_CHAT));
    console.log(data);
    const newdata={...data,status:WorkflowStatus.DRAFT,definition:JSON.stringify(initialFlow)}
    const result=await createnewworkflow({Data: newdata})
    console.log(result);
    if(!result){
        throw new Error("Failed to create new workflow")
    }
    return result
    }
    