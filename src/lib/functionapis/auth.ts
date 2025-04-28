"use server";
import { AuthData, SignupData } from "@/types/auth";
import apiClient from "./apiclient";
import { AxiosError } from "axios";
import { handleSetCookieHeaders } from "./cookies";

export const handleSigninApi = async (data: AuthData) => {
    try {
        const response = await apiClient.post('/auth/login', data);
        // console.log('RESPONSE',response)
        if (!response.status) {
            throw new Error('Signin failed');
        }

        return response.data;
    } catch (error) {
        console.error("Login error:", error);

        if (error instanceof AxiosError) {
            const errorMessage = error.response?.data?.message || error.message;
            throw new Error(errorMessage);
        }

        throw new Error('An error occurred during signin');
    }
}

export const handleSignupApi = async (data: SignupData) => {
    try {
        const backendData = {
            username: data.username,
            email: data.email,
            password: data.password
        };

        const response = await apiClient.post('/auth/signup', backendData);
        if (!response.status) {
            throw new Error('Signup failed');
        }

       

        return response.data;
    } catch (error) {
        console.error("Signup error:", error);

        if (error instanceof AxiosError) {
            const errorMessage = error.response?.data?.message || error.message;
            throw new Error(errorMessage);
        }

        throw new Error('An error occurred during signup');
    }
}

export const handleSignoutApi = async () => {
    try {
        const response = await apiClient.post('/auth/logout');
        
        if (!response.status) {
            throw new Error('Signout failed');
        }

        // Handle Set-Cookie headers
        const setCookieHeaders = response.headers['set-cookie'];
        if (setCookieHeaders) {
          await handleSetCookieHeaders(setCookieHeaders);
        }

        return response.data;
    } catch (error) {
        console.error("Signout error:", error);

        if (error instanceof AxiosError) {
            const errorMessage = error.response?.data?.message || error.message;
            throw new Error(errorMessage);
        }

        throw new Error('An error occurred during signout');
    }
}