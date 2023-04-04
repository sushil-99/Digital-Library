import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  if(user?.role !== "admin"){
    return "Unauthorised"
  }
  return user?.uid ? children : <Navigate to="/signin" />;
};
