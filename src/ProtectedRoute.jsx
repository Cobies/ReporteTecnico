import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = session => {
  return session.isLoggedIn === true ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

export default ProtectedRoutes 
