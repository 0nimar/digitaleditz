'use server'
import { OnboardingFormData, onboardingSchema } from "@/schema/onboarding";
import { handleOnboardApi } from "../functionapis/onboard";
import { cookies } from "next/headers";


export const handleOnboarding=async(form:OnboardingFormData )=>{
const {success,data}=onboardingSchema.safeParse(form);
if(!success){
    throw new Error("invalid form data")
}

const result=await handleOnboardApi(data);
if(!(result.data.status=="success")){
    throw new Error("Failed to OnBoard")
}

}
