import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from "./Components/Login";
import { useState } from "react";
import ProtectedRoutes from "./ProtectedRoute";
import Error from "./Components/Error";

function App() {

  const [session, setSession] = useState({ username: '', isLoggedIn: false })

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login session={session} setSession={setSession} />} />
        <Route index path="/admin" element={<h1>EMPLEADO</h1>} />
        <Route exact element={<ProtectedRoutes session={session} />}>
          <Route path="/profile" element={<h1>PERFIL</h1>} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
