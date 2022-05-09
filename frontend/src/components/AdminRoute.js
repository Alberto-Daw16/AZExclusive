import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Tienda } from '../Tienda';

export default function AdminRoute({ children }) {
  const { state } = useContext(Tienda);
  const { userInfo } = state;
  return userInfo && userInfo.isAdmin ? children : <Navigate to="/signin" />;
}
