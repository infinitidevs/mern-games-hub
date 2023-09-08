import React from 'react';

import { useAuth } from '../../hooks/useAuth';
import { Btn } from './styles';

const LogoutBtn = () => {
  const { user, logout } = useAuth();

  return (
    <nav>
      {!!user && (
        <Btn key={logout} onClick={logout}>
          Log out
        </Btn>
      )}
    </nav>
  );
};

export default LogoutBtn;
