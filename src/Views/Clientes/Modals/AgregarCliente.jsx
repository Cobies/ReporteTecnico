function AgregarCliente({ handleSubmit, clientesAgregados, cliente, handleChange }) {

  return (
    <div className="modal fade" id="ModalAgregarCliente" tabindex="-1" aria-labelledby="ModalAgregarClienteLabel" aria-hidden="true" style={{ marginTop: "4rem" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          {/* <div className="modal-header">
        <h5 className="modal-title" id="ModalAgregarClienteLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div> */}
          <div className="modal-body">
            <div className="container">
              <h2>Agregar Cliente</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre:</label>
                  <input type="text" name="nombre" id="nombre" className="form-control" value={cliente.nombre} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" name="email" id="email" className="form-control" value={cliente.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="telefono">Teléfono:</label>
                  <input type="tel" name="telefono" id="telefono" className="form-control" value={cliente.telefono} onChange={handleChange} />
                </div>
              </form>

              {/* <h2 className="mt-5">Clientes Agregados:</h2>
          <ul>
            {clientesAgregados.map((cliente, index) => (
              <li key={index}>
                <p>Nombre: {cliente.nombre}</p>
                <p>Email: {cliente.email}</p>
                <p>Teléfono: {cliente.telefono}</p>
              </li>
            ))}
          </ul> */}
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="submit" className="btn btn-primary">Agregar Cliente</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgregarCliente;