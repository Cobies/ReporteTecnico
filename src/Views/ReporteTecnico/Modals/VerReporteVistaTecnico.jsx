/* eslint-disable react/prop-types */
import SelectPro from '../Selects/SelectPro'
import moment from 'moment/moment'

const VerReporteVistaTecnico = ({
  verReporteVistaTecnico,
  setCaptureDetalles,
}) => {
  return (
    <div
      className="modal fade"
      id="VerReporteVistaTecnico"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="VerReporteVistaTecnico"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal-fullscreen p-5">
        <div className="modal-content">
          <div
            className="modal-header text-white"
            style={{ background: '#00B2FF' }}
          >
            <h5 className="modal-title">Ver Reporte Vista Tecnico</h5>
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
                <div className="form-check">
                  <div className="form-check form-switch">
                    <input
                      checked={verReporteVistaTecnico.activo}
                      //   onChange={handleChange}
                      style={{
                        backgroundColor: verReporteVistaTecnico.activo
                          ? '#00B2FF'
                          : null,
                        border: 'none',
                      }}
                      className="form-check-input"
                      name="Activo"
                      type="checkbox"
                      role="switch"
                      disabled
                    />
                    <label className="form-check-label" htmlFor="Activo">
                      Activo
                    </label>
                  </div>
                </div>

                <div className="mb-3 col-4">
                  <SelectPro
                    // onCaptureObj={onCaptureObj}
                    capture={verReporteVistaTecnico.cliente?.persona}
                    name={'Cliente'}
                    endpoint={'/Cliente/GetBusquedaClienteLimite'}
                    nameExtractor={(x) => x.persona.nombre}
                    SP={false}
                    modal="AgregarCliente"
                    initial={'/Cliente/GetAllClientesLimite/0'}
                    SM={true}
                  />
                </div>

                <div className="mb-3 col-4">
                  <div className="form-floating mb-3">
                    <input
                      autoComplete="off"
                      value={verReporteVistaTecnico.empleado?.persona?.nombre}
                      type="text"
                      className="form-control"
                      id="Empleado"
                      placeholder="Empleado"
                      readOnly
                    />
                    <label htmlFor="Empleado">Empleado</label>
                    <input
                      type="hidden"
                      name="Empleado"
                      //   value={JSON.stringify(perfil)}
                    />
                  </div>
                  {/* <SelectPro name={"Empleado"} endpoint={"/Empleado/GetAllEmpleado"} nameExtractor={(x) => x.persona.nombre} SP={true} /> */}
                </div>

                <div className="mb-3 col-4">
                  <div className="form-floating">
                    <textarea
                      autoComplete="off"
                      value={
                        verReporteVistaTecnico.sugerencia || 'Sin Obs.General'
                      }
                      className="form-control"
                      id="Sugerencia"
                      name="Sugerencia"
                      rows={4}
                      cols="100"
                      placeholder="Sugerencia"
                      readOnly
                    />
                    <label htmlFor="Sugerencia" className="form-label">
                      Obs. General
                    </label>
                  </div>
                </div>

                <div className="mb-3 col-6">
                  {/* <div className="form-group">
                                        <label htmlFor="DocumentosPdf" className="form-label">DocumentosPdf</label>
                                        <textarea
                                            className='form-control'
                                            id='DocumentosPdf'
                                            name="DocumentosPdf"
                                            rows="4"
                                            cols="100"
                                            placeholder='Url'
                                        />
                                    </div> */}
                </div>

                <table
                  className="table table-sm table-striped table-bordered"
                  style={{ fontSize: '0.8rem' }}
                >
                  <thead style={{ background: '#00B2FF' }}>
                    <tr className="text-center text-white">
                      <th scope="col">Cantidad</th>
                      <th scope="col">Producto</th>
                      <th scope="col">MARCA</th>
                      <th scope="col">MODELO</th>
                      <th scope="col">AREA</th>
                      <th scope="col">FECHA DE COMPRA</th>
                      <th scope="col">CONDICION</th>
                      <th scope="col">OBS. GENERAL</th>
                      <th scope="col">ACCIONES</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {verReporteVistaTecnico.detalle?.length === 0 ? (
                      <tr>
                        {' '}
                        <td className="text-center" colSpan={9}>
                          Vacio
                        </td>{' '}
                      </tr>
                    ) : (
                      verReporteVistaTecnico.detalle?.map((item, index) => (
                        <tr key={index}>
                          <td>{item.articulos?.length}</td>
                          <td>{item.producto?.nombre}</td>
                          <td>{item.producto?.marca?.nombre}</td>
                          <td>{item.producto?.modelo}</td>
                          <td>{item.area}</td>
                          <td>{moment(item.FechaCreado).format('L')}</td>
                          <td>{item.condicion}</td>
                          <td>{item.observacion}</td>
                          <td className="text-center">
                            <div className="d-flex justify-content-center gap-2 align-items-center">
                              <button
                                type="button"
                                className="btn"
                                style={{
                                  background: '#00B2FF',
                                  color: 'white',
                                }}
                                data-bs-toggle="modal"
                                data-bs-target="#VerDetallesReporte"
                                onClick={() => setCaptureDetalles(item)}
                              >
                                Ver
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              <div
                className="modal-footer"
                style={{
                  position: 'absolute',
                  bottom: '0',
                  right: '0',
                  width: '100%',
                }}
              >
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerReporteVistaTecnico
