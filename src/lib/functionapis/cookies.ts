"use server"
import { cookies } from 'next/headers';

/**
 * Sets cookies in the browser from Set-Cookie headers received from an API response
 * @param setCookieHeaders - The Set-Cookie headers from the API response
 */
export async function handleSetCookieHeaders(setCookieHeaders: string | string[] | undefined): Promise<void> {
  if (!setCookieHeaders) return;
  const setCookiesArray = Array.isArray(setCookieHeaders) 
  ? setCookieHeaders
  : [setCookieHeaders];
  
for (const cookieStr of setCookiesArray) {
  // Parse the cookie string
  const [mainPart] = cookieStr.split(';');
  const [name, ...valueParts] = mainPart.split('=');
  const value = valueParts.join('='); // Handle values that may contain '='
  
  // Extract cookie options
  const options: Record<string, any> = {
    path: '/', // Default path
  };
  
  // Extract other cookie options if needed
  cookieStr.split(';').slice(1).forEach(part => {
    const [optName, optValue] = part.trim().split('=');
    if (optName.toLowerCase() === 'path') options.path = optValue;
    if (optName.toLowerCase() === 'max-age') options.maxAge = parseInt(optValue);
    if (optName.toLowerCase() === 'expires') options.expires = new Date(optValue);
    if (optName.toLowerCase() === 'secure') options.secure = true;
    if (optName.toLowerCase() === 'httponly') options.httpOnly = true;
    if (optName.toLowerCase() === 'samesite') options.sameSite = optValue;
  });
  
    // Set the cookie using Next.js cookies API
   (await cookies()).set(name, value, options);
  }
}

// Example usage:
// import { handleSetCookieHeaders } from './cookieHandler';
// const response = await apiClient.post('/auth/login', data);
// await handleSetCookieHeaders(response.headers['set-cookie')