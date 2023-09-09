import { Navigate, useOutlet } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

export const FreeLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (user) return <Navigate to={'home'} replace />;

  return <>{outlet}</>;
};
