import apiClient from "./apiclient"
import apiClientNew from "./apiclientnew";
export async function GetAllUsers() {
    console.log("GetAllUsers function called");
    try {
        const response = await apiClientNew.get('/user/all');        
        // Check if response.data and response.data.users are defined
        console.log(response)
        if (!response || !response.data) {
            throw new Error('Failed to fetch user profile: Invalid response structure');
        }
        const data = response.data;
        return data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw new Error('Failed to fetch user profile');
    }
}
