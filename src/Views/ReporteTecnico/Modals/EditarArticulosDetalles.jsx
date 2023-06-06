/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
function EditarArticulosDetalles({
  capture,
  setCapture,
  setArticulos,
  articulos,
}) {
  const editArticulo = (index, newValues, editar, articulos) => {
    // console.log(newValues)
    const updatedArticulos = [...articulos]
    updatedArticulos[index] = { ...updatedArticulos[index], ...newValues }
    editar(updatedArticulos)
  }

  async function editArticuloArticulo(e) {
    e.preventDefault()
    editArticulo(capture.index, capture.x, setArticulos, articulos)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const fieldValue = type === 'checkbox' ? checked : value
    setCapture({ ...capture, x: { ...capture.x, [name]: fieldValue } })
  }

  return (
    <div
      style={{ paddingTop: '15%' }}
      className="modal fade"
      id="EditarArticulosDetalles"
      tabIndex={-1}
      aria-labelledby="EditarArticulosDetalles"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div
            className="modal-header text-white"
            style={{ background: '#00B2FF' }}
          >
            <h5 className="modal-title">
              Editar Articulo Detalle - Serie : {capture.x.Serie}{' '}
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={editArticuloArticulo}>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        name="Operativo"
                        type="checkbox"
                        role="switch"
                        value={capture.x.Operativo}
                        onChange={handleChange}
                        defaultChecked={true}
                        style={{
                          backgroundColor: capture.x.Operativo
                            ? '#00B2FF'
                            : null,
                          border: 'none',
                        }}
                      />
                      <label className="form-check-label" htmlFor="Operativo">
                        Operativo
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="date"
                      className="form-control"
                      name="FechaCompra"
                      value={capture.x.FechaCompra}
                      onChange={(e) =>
                        setCapture({
                          ...capture,
                          x: { ...capture.x, FechaCompra: e.target.value },
                        })
                      }
                    ></input>
                    <label htmlFor="FechaCompra" className="form-label">
                      Fecha Compra
                    </label>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      name="Observaciones"
                      value={capture.x.Observaciones}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Ingrese Observaciones"
                    ></textarea>
                    <label htmlFor="Observaciones" className="form-label">
                      Observaciones *
                    </label>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                {/* <label className="text-danger">{message}</label> */}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  aria-hidden="true"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn text-white"
                  style={{ background: '#00B2FF' }}
                >
                  {' '}
                  Editar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditarArticulosDetalles
