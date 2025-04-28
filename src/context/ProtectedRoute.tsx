"use client"
import { ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '../hooks/auth';
import { UserRole } from '../types/auth';
import { ENV } from '@/lib/functionapis/config';
import VerificationPending from '@/components/verification-pending';
import { VerificationTimeline } from '@/components/verification-timeline';

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRoles?: UserRole[];
  isdev?: boolean;
}
const ProtectedRoute = ({ children, requiredRoles = [],isdev=ENV.ISDEV }: ProtectedRouteProps) => {

  const { isAuthenticated,isActivated, hasPermission } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const isDashboard = pathname === '/dashboard' || pathname === '/dashboard/';
  const isPublic= pathname==='/settings/'||pathname==='/help/'
  if (isdev) {
    console.log(isdev)
    return <>{children}</>
  }

 
 

  else if (!isAuthenticated) {
    router.push('/signin');
    return null;
  }

  else if (requiredRoles.length > 0 && !hasPermission(requiredRoles)) {
    router.push('/unauthorized');
    return null;
  }
  else if (!isActivated){
    if(isDashboard){
    return<><VerificationTimeline/></>}
    if(!isDashboard && !isPublic){
     
      return <><VerificationPending/></>;
    }
  }
  return <>{children}</>;
};

export default ProtectedRoute;