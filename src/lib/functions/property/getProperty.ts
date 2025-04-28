import apiClientNew from "@/lib/functionapis/apiclientnew";
import { PropertyFormValues, propertySchema } from "@/schema/property";

export async function GetProperties( ) {
    
        try{
          const response =await apiClientNew.get('/inventory/');
          console.log("response",response.data)
          return response.data;
        }
        catch(error){
          console.log("error",error)
          throw new Error("Failed to create property")
        }
}

export async function GetProperty({productId}:{productId:string} ) {
    
    try{
      const response =await apiClientNew.get(`/inventory/${productId}`);
      console.log("response",response.data)
      return response.data;
    }
    catch(error){
      console.log("error",error)
      throw new Error("Failed to create property")
    }
}
