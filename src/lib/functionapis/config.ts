import { config } from 'dotenv';

// Load environment variables from .env file
config();

// Export environment variables with types
export const ENV = {
    BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000',
    ISDEV:true
};
