const AgregarLinea = () => {
  return (
    <div
      style={{ paddingTop: "15%" }}
      className="modal fade"
      id="AgregarLinea"
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
            <h5 className="modal-title">Agregar Linea</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      name="nombre"
                      // value={formDetalles.Producto.modelo}
                      // onChange={handleChangeProducto}
                      type="text"
                      className="form-control"
                      placeholder="nombre"
                    />
                    <label htmlFor="nombre" className="form-label">
                      Nombre
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      name="descripcion"
                      // value={formDetalles.Producto.modelo}
                      // onChange={handleChangeProducto}
                      type="text"
                      className="form-control"
                      placeholder="descripcion"
                    />
                    <label htmlFor="descripcion" className="form-label">
                      Descripcion
                    </label>
                  </div>
                </div>
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
                  type="submit"
                  className="btn text-white"
                  data-bs-dismiss="modal"
                  style={{ background: "#00B2FF" }}
                >
                  Crear Linea
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgregarLinea;
