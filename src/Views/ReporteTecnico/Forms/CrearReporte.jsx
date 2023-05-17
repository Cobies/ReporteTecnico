
import AgregarCliente from './../../Clientes/Modals/AgregarCliente';
import { useState } from 'react';
// import ReporteVisitaTecnica from '../../../Models/ReporteTecnico/ReporteVisitaTecnica';

function CrearReporte() {

  // Crear Cliente
  const [cliente, setCliente] = useState({
    nombre: '',
    email: '',
    telefono: '',
  })

  const [clientesAgregados, setClientesAgregados] = useState([]);

  const handleChange = (event) => {
    setCliente({ ...cliente, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setClientesAgregados([...clientesAgregados, cliente]);
    setCliente({ nombre: '', email: '', telefono: '' });
  }

  const ReporteSubmit = async (e) => {
    e.preventDefault();
    const DocumentosPdf = e.target.DocumentosPdf.value;
    const Sugerencia = e.target.Sugerencia.value;
    console.log(DocumentosPdf, Sugerencia)
    try {
      const response = await fetch('https://api.grupoupgrade.com.pe/ReporteVisitaTecnica/SetReporteVisitaTecnica', {
        method: 'POST',
        body: JSON.stringify({ _id: null, FechaCreado: new Date(), Sugerencia: "Sugerencia", DocumentosPdf: "DocumentosPdf" }),
        headers: { 'Content-Type': 'application/json' },
      })
      // const data = await response.text();
      console.log(response)

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <form onSubmit={ReporteSubmit}>
        <div className="container" >
          <h3 className="fw-bold my-4">Crear Reporte</h3>
          <h4>Informacion Del Cliente</h4>
          <div className="row">
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="nombreEquipo" className="form-label text-dark">Codigo Del Reporte</label>
                <input type="number" className="form-control" id="IdReporte" aria-describedby="nombreEquipoHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="nombreEquipo" className="form-label text-dark">Ciudad</label>
                <input type="text" className="form-control" id="nombreEquipo" aria-describedby="nombreEquipoHelp" />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="DocumentosPdf" className="form-label text-dark" >DocumentosPdf</label>
                <input type="text" className="form-control" name="DocumentosPdf" />
              </div>
              <div className="mb-3">
                <label htmlFor="Sugerencia" className="form-label text-dark" >Sugerencia</label>
                <input type="text" className="form-control" name="Sugerencia" />
              </div>
              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-primary">Crear</button>
                <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#ModalAgregarCliente">Añadir Cliente</button>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* Modal */}
      <AgregarCliente onClick={handleSubmit} clientesAgregados={clientesAgregados} cliente={cliente} handleChange={handleChange}></AgregarCliente>

      <div className="my-4">
        <select className="form-select" aria-label="Default select example">
          <option selected>Selecciona</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </>
  );
}

export default CrearReporte;