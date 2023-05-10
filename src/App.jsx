import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { useState } from "react";
import ProtectedRoutes from "./ProtectedRoute";
import Error from "./Components/Error";
import __Layout from "./Shared/__Layout";

function App() {

  const [session, setSession] = useState({ username: '', isLoggedIn: false })

  return (
    <BrowserRouter>
      <__Layout session={session} setSession={setSession} >
        <Routes>
          <Route index path="/" element={<h1>Cliente</h1>} />
          <Route index path="/admin" element={<h1>EMPLEADO</h1>} />
          <Route exact element={<ProtectedRoutes session={session} />}>
            <Route path="/profile" element={<h1>PERFIL</h1>} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </__Layout>
    </BrowserRouter>

  )
}

export default App
