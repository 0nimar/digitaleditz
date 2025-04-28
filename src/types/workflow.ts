import { LucideProps } from "lucide-react";
import { TaskParam, TaskType } from "./task";

export enum WorkflowStatus {
    DRAFT="DRAFT",
    ACTIVE="ACTIVE",
    DISABLED="DISABLED",
    PUBLISHED="PUBLISHED"
}

export interface WorkFlow{
    [key:string]:any;
}

export interface UserWorkFlow {
    title: string;
    description: string;
    status: string;
    lastEdited: string;
}
export type WorkflowTasks={
    label:string;
    icon:React.FC<LucideProps>;
    type:TaskType;
    isEntryPoint?:boolean;
    isAuthPoint?:boolean;
    isEndPoint?:boolean;
    inputs:TaskParam[];
    body?:TaskParam;
    outputs?:TaskParam[];
}

export type WorkflowData={
    status: WorkflowStatus;
    definition: string;
    name: string;
    color?: "none" | "blue" | "green" | "orange" | "purple" | "red";
    description?: string;
    isTemplate?: boolean;
}

export type ActivateFlowData={
    phone_number:string;
    workflow_id:string;
}