import { ENV } from "./config";
import axios from "axios";
import apiClient from "./apiclient";

const url = ENV.BACKEND_URL;

const handleDemo = async (form: any): Promise<{ success: boolean; data?: any; error?: string }> => {
  try {
    const response = await apiClient.post(`/demo/`, form);
    if (response.status === 200) {
      return {
        success: true,
        data: response.data
      };
    }
    return {
      success: false,
      error: 'Failed to process request'
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message || 'An error occurred'
    };
  }
};

export { handleDemo };

