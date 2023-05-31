const AgregarCliente = () => {
  return (
    <div
      style={{ paddingTop: "15%" }}
      className="modal fade"
      id="AgregarCliente"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div
            className="modal-header text-white"
            style={{ background: "#00B2FF" }}
          >
            <h5 className="modal-title" id="exampleModalLabel">
              Agregar Cliente
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            
            
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            <button
              type="button"
              className="btn text-white"
              style={{ background: "#00B2FF" }}
            >
              Crear Cliente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgregarCliente;
