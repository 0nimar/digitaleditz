'use server'
import axios from 'axios';
import { cookies } from 'next/headers';
import { ENV } from './config';

const apiClient = axios.create({
  baseURL: ENV.BACKEND_URL,
  withCredentials: true,
});

apiClient.interceptors.request.use(async (config) => {
  if (typeof window === 'undefined') {
    try {
      const cookieStore = await cookies();
      const accessToken = cookieStore.get('access-token')?.value;
      const refreshToken = cookieStore.get('refresh-token')?.value;
      
      if (accessToken || refreshToken) {
        const cookieHeader = [];
        if (accessToken) cookieHeader.push(`access-token=${accessToken}`);
        if (refreshToken) cookieHeader.push(`refresh-token=${refreshToken}`);
        
        config.headers['Cookie'] = cookieHeader.join('; ');
      }
    } catch (error) {
      console.error('Error setting cookies in request:', error);
    }
  }
  
  return config;
});

apiClient.interceptors.response.use(async (response) => {
  if (typeof window === 'undefined' && response.headers['set-cookie']) {
    try {
      const cookieStore = await cookies();
      const setCookieHeaders = response.headers['set-cookie'];
      
      for (const header of setCookieHeaders) {
        const [nameValue] = header.split(';');
        const [name, value] = nameValue.split('=');
        
        const maxAgeMatch = header.match(/Max-Age=(\d+)/i);
        const maxAge = maxAgeMatch ? parseInt(maxAgeMatch[1], 10) : undefined;
        
        const secure = header.toLowerCase().includes('secure');
        const httpOnly = header.toLowerCase().includes('httponly');
        const path = header.match(/Path=([^;]+)/i)?.[1] || '/';
        
        cookieStore.set({
          name: name.trim(),
          value: value.trim(),
          maxAge,
          secure,
          httpOnly,
          path,
          sameSite: 'lax',
        });
      }
    } catch (error) {
      console.error('Error processing set-cookie headers:', error);
    }
  }
  
  return response;
});

export default apiClient;