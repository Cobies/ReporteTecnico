/* eslint-disable react/prop-types */
import { useEffect } from "react";
import SelectPro from "../Selects/SelectPro"
import moment from "moment";

const VerDetallesReporte = ({ captureDetalles }) => {

    useEffect(() => {
        return () => console.log("Eliminando Detalles")
    }, [])

    const articulos = captureDetalles.Articulos || captureDetalles.articulos;
    // console.log(articulos)

    return <div
        className="modal fade"
        id="VerDetallesReporte"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="VerDetallesReporte"
    >
        <div className="modal-dialog modal-dialog-scrollable modal-fullscreen p-5">
            <div className="modal-content">
                <div
                    className="modal-header text-white"
                    style={{ background: "#00B2FF" }}
                >
                    <h5 className="modal-title">Ver Detalles</h5>
                    <button
                        type="button"
                        className="btn-close btn-close-white"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="modal-body">
                    <form onSubmit={e => e.preventDefault()}>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="mb-3">
                                    <SelectPro
                                        name={"Producto"}
                                        endpoint={
                                            "/ProductoReporte/GetBusquedaProductoReporteLimite"
                                        }
                                        capture={captureDetalles.Producto || captureDetalles.producto || ''}
                                        nameExtractor={(x) => x.nombre}
                                        // onCaptureObj={onCaptureObj}
                                        SP={false}
                                        modal="AgregarProducto"
                                        initial={
                                            "/ProductoReporte/GetAllProductoReporteLimite/0"
                                        }
                                        SM={true}
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-floating mb-3">
                                    <input
                                        autoComplete="off"
                                        name="area"
                                        value={captureDetalles.Area || captureDetalles.area || 'Sin Area'}
                                        // onChange={handleChange}
                                        type="text"
                                        className="form-control"
                                        placeholder="area"
                                        readOnly
                                    />
                                    <label htmlFor="area" className="form-label">
                                        Área
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-floating mb-3">
                                    <textarea
                                        autoComplete="off"
                                        className="form-control"
                                        value={captureDetalles.Observacion || captureDetalles.observacion || 'Sin Observación'}
                                        // onChange={handleChange}
                                        name="observacion"
                                        rows={3}
                                        placeholder="Ingrese observaciones"
                                        readOnly
                                    ></textarea>
                                    <label htmlFor="observacion" className="form-label">
                                        Observacion
                                    </label>
                                </div>
                            </div>
                        </div>

                        <table
                            className="table table-sm table-striped table-bordered"
                            style={{ fontSize: "0.8rem" }}
                        >
                            <thead style={{ background: "#00B2FF" }}>
                                <tr className="text-center text-white">
                                    <th scope="col">FECHA CREADO</th>
                                    <th scope="col">SERIE</th>
                                    <th scope="col">OPERATIVO</th>
                                    <th scope="col">OBSERVACIONES</th>
                                    <th scope="col">FECHA COMPRA</th>
                                    {/* <th scope="col">ACCIONES</th> */}
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {articulos?.length === 0 ? (
                                    <tr>
                                        <td className="text-center" colSpan={9}>
                                            Vacio
                                        </td>
                                    </tr>
                                ) : (
                                    articulos?.map((x, index) => (
                                        <tr key={index}>
                                            <td>{moment(x.FechaCreado || x.fechaCreado).format("L")}</td>
                                            <td>{x.Serie || x.serie}</td>
                                            <td>
                                                {x.Operativo || x.operativo ? (
                                                    <i className="bi bi-check text-success"></i>
                                                ) : (
                                                    <i className="bi bi-x-lg text-danger"></i>
                                                )}
                                            </td>
                                            <td>{x.Observaciones || x.observaciones}</td>
                                            <td>{moment(x.FechaCompra || x.fechaCompra).isValid() ? moment(x.FechaCompra || x.fechaCompra).format("L") : "Sin Fecha"}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                        <div
                            className="modal-footer"
                        >
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                aria-hidden="true"
                            >
                                Close
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
}

export default VerDetallesReporte
