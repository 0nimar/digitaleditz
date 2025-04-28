"use server"

import apiClient from "@/lib/functionapis/apiclient"

export const deleteProperty=async(id:string)=>{
  try{
    const response =await apiClient.delete(`/inventory/${id}`)
    if(response.status !== 200){
        throw new Error("Failed to update workflow")
      }
    return response.data
  }
  catch(e){
    console.error("Error deleting Property",e)
  }
}