import { ReactNode } from 'react';
import { useAuth } from './auth';
import { UserRole } from '../types/auth';

export const usePermission = () => {
  const { hasPermission } = useAuth();

  return {
    can: (requiredRoles: UserRole[]) => hasPermission(requiredRoles),
    canView: (element: ReactNode, requiredRoles: UserRole[]) => {
      return hasPermission(requiredRoles) ? element : null;
    }
  };
};