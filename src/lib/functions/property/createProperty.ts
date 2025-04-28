'use server'
import apiClient from "@/lib/functionapis/apiclient";
import { PropertyFormValues, propertySchema } from "@/schema/property";

export async function CreateProperty(form:PropertyFormValues ) {
      const {success,data}=propertySchema.safeParse(form);
      console.log(success,data)
        if(!success){
            throw new Error("invalid form data")
        }
        try{
          const response =await apiClient.post('/inventory/new-item',data);
          console.log("response",response.data)
          return response.data;
        }
        catch(error){
          console.log("error",error)
          throw new Error("Failed to create property")
        }
}