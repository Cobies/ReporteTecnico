import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { useState, useEffect } from 'react'
import ProtectedRoutes from './ProtectedRoute'
import Error from './Components/Error'
import __Layout from './Shared/__Layout'
import MainPageReportes from './Views/ReporteTecnico/Vistas/MainPageReportes'
import jwtDecode from 'jwt-decode'

function App() {
  const [session, setSession] = useState({
    username: '',
    isLoggedIn: false,
    id: '',
  })

  useEffect(() => {
    localStorage.setItem('contador', 1)
    if (localStorage.getItem('token')) {
      const perfil = jwtDecode(localStorage.getItem('token'))
      setSession({
        username: perfil.nombreusuaio,
        isLoggedIn: true,
        id: perfil.identificador,
      })
    }
  }, [])

  return (
    <BrowserRouter>
      <__Layout session={session} setSession={setSession}>
        <Routes>
          <Route exact element={<ProtectedRoutes session={session} />}>
            <Route
              index
              path="/"
              element={
                session.isLoggedIn ? (
                  <MainPageReportes session={session} />
                ) : null
              }
            />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </__Layout>
    </BrowserRouter>
  )
}

export default App
