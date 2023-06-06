import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutes = session => {
  return session.isLoggedIn == true ? <Navigate to="/" /> : <Outlet />
}

export default ProtectedRoutes
