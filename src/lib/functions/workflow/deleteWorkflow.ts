import apiClientNew from "@/lib/functionapis/apiclientnew";

export const deleteWorkflow=async(id:string)=>{
    try{
        const response = await apiClientNew.delete(`/workflow/delete/${id}`)
        console.log("@DELETINGRES",response)
    }
    catch(e){
        console.error("Error deleting Workflow",e);
        throw new Error("Something went wrong")
    }
}