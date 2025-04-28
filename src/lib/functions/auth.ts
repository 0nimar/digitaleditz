"use server"
import { userSigninSchema, UserSigninSchemaType, userSignupSchema, UserSignupSchemaType } from "@/schema/auth"; 
import { handleSigninApi, handleSignoutApi, handleSignupApi } from "../functionapis/auth"; 
import { cookies } from "next/headers";
 
export const handleSignin = async (form: UserSigninSchemaType) => { 
    const { success, data } = userSigninSchema.safeParse(form); 
    if (!success) { 
        throw new Error("Invalid form data: Please check your input"); 
    } 
 
    try { 
        const response = await handleSigninApi(data);
        if (!response) { 
            throw new Error("Signin failed: No response from server"); 
        }  
        return response; 
    } catch (error) { 
        const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred during signin"; 
        throw new Error(errorMessage); 
    } 
} 
 
export const handleSignup = async (form: UserSignupSchemaType) => { 
    const { success, data } = userSignupSchema.safeParse(form); 
    if (!success) { 
        throw new Error("Invalid form data: Please check your input"); 
    } 
 
    const newData = { 
        username: data.username, 
        email: data.email, 
        password: data.password 
    }; 
 
    try { 
        const response = await handleSignupApi(newData); 
        
        if (!response) { 
            throw new Error("Signup failed: No response from server"); 
        } 
        return response; 
    } catch (error) { 
        const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred during signup"; 
        throw new Error(errorMessage); 
    } 
}
export const handleSignout = async () => {
    try {
        const response = await handleSignoutApi();
        
        if (!response) {
            throw new Error("Signout failed: No response from server");
        }
        const cookieStore = await cookies();
        cookieStore.delete("access-token");
        cookieStore.delete("refresh-token");
        
        return { success: true };
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred during signout";
        throw new Error(errorMessage);
    }
}