
import apiClientNew from "./apiclientnew";

export async function GetMy() {
    console.log("GetMyProfile function called"); // Debugging line
    const response = await apiClientNew.get('/user/me');
    console.log("Response from GetMyProfile:", response); // Debugging line
    if (!response) {
        throw new Error('Failed to fetch user profile');
    }
    const data = response.data;
    return data;
}

export const GetMyProfile=async () => {
    
    console.log("GetMyProfile function called"); // Debugging line
    const response = await apiClientNew.get('/user/me/profile')
    
    console.log("Response from GetMyProfile:", response); // Debugging line
    if (!response) {
        throw new Error('Failed to fetch user profile');
    }
    console.log("RESPONSE",response);
    return response.data;
}