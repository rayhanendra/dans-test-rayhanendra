import React, { useEffect } from 'react';
import { useUser } from '../store/authStore';
import { useNavigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

const ProtectedRoutes = ({ children }: Props) => {
  const navigate = useNavigate();

  const user = useUser();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return <div>{children}</div>;
};

export default ProtectedRoutes;
