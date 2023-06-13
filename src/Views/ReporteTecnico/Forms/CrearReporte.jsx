// import SelectFloat from '../../../Components/SelectFloat';
import AgregarCliente from './../../Clientes/Modals/AgregarCliente'
import { useEffect, useState } from 'react'
// import ReporteVisitaTecnica from '../../../Models/ReporteTecnico/ReporteVisitaTecnica';

function CrearReporte() {
  // Crear Cliente
  const [cliente, setCliente] = useState([{}])
  const [clientesAgregados, setClientesAgregados] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    setClientesAgregados([...clientesAgregados, cliente])
    setCliente({ nombre: '', email: '', telefono: '' })
  }

  useEffect(() => {
    // GetAllCliente()
  }, [])

  return (
    <>
      {/* Modal */}
      <AgregarCliente
        onClick={handleSubmit}
        clientesAgregados={clientesAgregados}
        cliente={cliente}
      ></AgregarCliente>
    </>
  )
}

export default CrearReporte
