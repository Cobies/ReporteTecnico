function FormReportes() {
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

        <button type="submit" className="btn btn-primary">Crear</button>
      </div>
    </div>
  </div>

  </form>


  </>

   );
}

export default FormReportes;