import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { useState } from "react";
import ProtectedRoutes from "./ProtectedRoute";
import Error from "./Components/Error";
import __Layout from "./Shared/__Layout";
import MainPageReportes from "./Views/ReporteTecnico/Vistas/MainPageReportes";
import DetalleReporteTecnico from "./Views/ReporteTecnico/Vistas/DetalleReportetecnico";
import AgregarCliente from "./Views/Clientes/Modals/AgregarCliente";
import Detalles from "./Views/ReporteTecnico/Modals/Detalles";

function App() {
  const [session, setSession] = useState({ username: '', isLoggedIn: false })

  return (
    <BrowserRouter>
      <__Layout session={session} setSession={setSession} >
        <Routes>
          <Route index path="/admin" element={<Detalles />} />
          <Route exact element={<ProtectedRoutes session={session} />}>
            <Route index path="/" element={<h1 className="container">Cliente</h1>} />
            <Route path="/profile" element={<h1>PERFIL</h1>} />
            <Route path="/reportes" element={<MainPageReportes />} />
            <Route path="/reportes/Detalles" element={<DetalleReporteTecnico></DetalleReporteTecnico>} />
            <Route path="/reportes/AddClient" element={<AgregarCliente></AgregarCliente>} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </__Layout>
    </BrowserRouter>
  )
}

export default App
