"use server"
import { OnboardingFormData } from "@/schema/onboarding";
import apiClient from "./apiclient";
import { handleSetCookieHeaders } from "./cookies";
export const handleOnboardApi = async (data: OnboardingFormData) => {
    try {
        
        const response = await apiClient.post('/user/create', data)
        
        // Handle cookies from response headers
        if (response.headers['set-cookie']) {
            // Use await here since handleSetCookieHeaders is async
            await handleSetCookieHeaders(response.headers['set-cookie']);
        }
        
        if (!response.status) {
            throw new Error('User creation failed');
        }
        
        return response.data;
    } catch (error: any) {
        // More detailed error handling
        console.error("User creation failed:", error.response?.data || error.message);
        
        // You can customize error messages based on status codes
        if (error.response?.status === 409) {
            throw new Error('User already exists');
        } else if (error.response?.status === 400) {
            throw new Error(error.response.data.detail || 'Invalid data provided');
        }
        
        throw error.response?.data?.detail || 
              error.message || 
              'An error occurred during user creation';
    }
}