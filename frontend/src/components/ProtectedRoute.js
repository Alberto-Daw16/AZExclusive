import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Tienda } from '../Tienda';

export default function ProtectedRoute({ children }) {
  const { state } = useContext(Tienda);
  const { userInfo } = state;
  return userInfo ? children : <Navigate to="/signin" />;
}
