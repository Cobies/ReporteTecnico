function FormReportes() {
  return ( 

  <>
<form>
  <div className="container" style={{ marginTop: "1rem" }}>
    <p>Bienvenido al Sistema</p>
    <h4>Equipos</h4>
    <div className="row">
      <div className="col-md-6">
        <div className="mb-3">
          <label htmlFor="codigoAtencion" className="form-label text-dark">Codigo de Atencion</label>
          {/* <input type="text" className="form-control" id="codigoAtencion" aria-describedby="codigoAtencionHelp" /> */}
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ingrese"></input>
        </div>
        <div className="mb-3">
          <label htmlFor="nombreEquipo" className="form-label text-dark">Nombre del Cliente</label>
          <input type="text" className="form-control" id="nombreEquipo" aria-describedby="nombreEquipoHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="nombreEquipo" className="form-label text-dark">Ciudad</label>
          <input type="text" className="form-control" id="nombreEquipo" aria-describedby="nombreEquipoHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="nombreEquipo" className="form-label text-dark">Telefono</label>
          <input type="text" className="form-control" id="nombreEquipo" aria-describedby="nombreEquipoHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="fechaEquipo" className="form-label text-dark">Fecha</label>
          <input type="date" className="form-control" id="fechaEquipo" aria-describedby="fechaEquipoHelp" placeholder="YYYY-MM-DD" />
        </div>

       
      </div>

      <div className="col-md-6">
      <div className="mb-3">
          <label htmlFor="nombreEquipo" className="form-label text-dark">Nombre del Equipo</label>
          <input type="text" className="form-control" id="nombreEquipo" aria-describedby="nombreEquipoHelp" />
          {/* <div id="nombreEquipoHelp" className="form-text">Nunca compartiremos tu email con nadie.</div> */}
        </div>
        <div className="mb-3">
          <label htmlFor="tipoMantenimiento" className="form-label text-dark">Tipo de Mantenimiento</label>
          <input type="text" className="form-control" id="tipoMantenimiento" />
        </div>
        <div className="mb-3">
          <label htmlFor="estadoEquipo" className="form-label text-dark">Estado del Equipo</label>
          <input type="text" className="form-control" id="estadoEquipo" />
        </div>
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