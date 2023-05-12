import { Link } from "react-router-dom";
import AgregarCliente from './../../Clientes/Modals/AgregarCliente';
import React, { useState } from 'react';

function CrearReporte() {

  // Crear Cliente
  const [cliente, setCliente] = useState({
    nombre: '',
    email: '',
    telefono: '',
  });

  const [clientesAgregados, setClientesAgregados] = useState([]);

  const handleChange = (event) => {
    setCliente({ ...cliente, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setClientesAgregados([...clientesAgregados, cliente]);
    setCliente({ nombre: '', email: '', telefono: '' });
  };

  return ( 
    <>
    <form>
      <div className="container" style={{ marginTop: "1rem" }}>
        <p>Bienvenido al Sistema</p>
        <br></br>
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
            {/* <div className="mb-3">
              <label htmlFor="fechaEquipo" className="form-label text-dark">Fecha</label>
              <input type="date" className="form-control" id="fechaEquipo" aria-describedby="fechaEquipoHelp" placeholder="YYYY-MM-DD" />
            </div> */}
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="nombreEquipo" className="form-label text-dark">Telefono</label>
              <input type="text" className="form-control" id="nombreEquipo" aria-describedby="nombreEquipoHelp" />
            </div>
            {/* <div className="mb-3">
              <label htmlFor="nombreEquipo" className="form-label text-dark">Nombre del Equipo</label>
              <input type="text" className="form-control" id="nombreEquipo" aria-describedby="nombreEquipoHelp" />
            </div> */}
            {/* <div className="mb-3">
              <label htmlFor="tipoMantenimiento" className="form-label text-dark">Tipo de Mantenimiento</label>
              <input type="text" className="form-control" id="tipoMantenimiento" />
            </div>
            <div className="mb-3">
              <label htmlFor="estadoEquipo" className="form-label text-dark">Estado del Equipo</label>
              <input type="text" className="form-control" id="estadoEquipo" />
            </div> */}
            {/* <div className="mb-3">
              <label htmlFor="listo" className="form-label text-dark">Listo</label>
              <input type="text" className="form-control" id="listo" />
            </div> */}
            <div className="mb-3">
              <label htmlFor="responsable" className="form-label text-dark">Responsable</label>
              <input type="text" className="form-control" id="responsable" />
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
        <select class="form-select" aria-label="Default select example">
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