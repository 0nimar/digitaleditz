import axios from "axios";
import { ENV } from "./config";

export async function handleImageUpload(file: File[]) {
    const route = file.length !== 1 ? 'bulk-images' : 'image';
    console.log("file", file);
    
    const formData = new FormData();
    if (file.length !== 1) {
        file.forEach((f, index) => {
            formData.append(`files`, f);
        });
    } else {
        formData.append('file', file[0]);
    }

    const response = await axios.post(
        `${ENV.BACKEND_URL}/file/${route}`,
        formData,
        { 
            headers: { 
                "Content-Type": "multipart/form-data" 
            }
        }
    );
    console.log("@RESPONSE", response);
    return response;
}