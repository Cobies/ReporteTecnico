/* eslint-disable react/prop-types */
import { useEffect } from "react";
import SelectPro from "../Selects/SelectPro"
import moment from "moment";

const EditarDetallesReporte = ({ captureDetalles }) => {

    const onCaptureObj = (producto) => {
        console.log(producto)
        // setFormDetalles((prevState) => ({
        //     ...prevState,
        //     Producto: producto
        // }));
    };

    useEffect(() => {
        console.log(captureDetalles)
    }, [captureDetalles])

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldValue =
            type === "checkbox" ? checked : type === "date" ? new Date(value) : value;
        // setFormReporteVistaTecnica((prev) => ({
        //     ...prev,
        //     [name]: fieldValue,
        // }));
    }

    return <div
        className="modal fade"
        id="EditarDetallesReporte"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="EditarDetallesReporte"
    >
        <div className="modal-dialog modal-dialog-scrollable modal-fullscreen p-5">
            <div className="modal-content">
                <div
                    className="modal-header text-white"
                    style={{ background: "#00B2FF" }}
                >
                    <h5 className="modal-title">Editar Detalles</h5>
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
                                        capture={captureDetalles.Producto}
                                        nameExtractor={(x) => x.nombre}
                                        onCaptureObj={onCaptureObj}
                                        SP={false}
                                        modal="AgregarProducto"
                                        initial={
                                            "/ProductoReporte/GetAllProductoReporteLimite/0"
                                        }
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-floating mb-3">
                                    <input
                                        autoComplete="off"
                                        name="area"
                                        value={captureDetalles.Area}
                                        // onChange={handleChange}
                                        type="text"
                                        className="form-control"
                                        placeholder="area"
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
                                        value={captureDetalles.Observacion}
                                        // onChange={handleChange}
                                        name="observacion"
                                        rows={3}
                                        placeholder="Ingrese observaciones"
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
                                    <th scope="col">ACCIONES</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {captureDetalles.Articulos?.length === 0 ? (
                                    <tr>
                                        <td className="text-center" colSpan={9}>
                                            Vacio
                                        </td>
                                    </tr>
                                ) : (
                                    captureDetalles.Articulos?.map((x, index) => (
                                        <tr key={index}>
                                            <td>{moment(x.FechaCreado).format("L")}</td>
                                            <td>{x.Serie}</td>
                                            <td>
                                                {x.Operativo ? (
                                                    <i className="bi bi-check text-success"></i>
                                                ) : (
                                                    <i className="bi bi-x-lg text-danger"></i>
                                                )}
                                            </td>
                                            <td>{x.Observaciones}</td>
                                            <td>{moment(x.FechaCompra).isValid() ? moment(x.FechaCompra).format("L") : "Sin Fecha"}</td>
                                            <td className="text-center">
                                                <div className="d-flex justify-content-center gap-2 align-items-center">
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                    // data-bs-toggle="modal"
                                                    // data-bs-target="#EditarArticulosDetalles"
                                                    // onClick={() => setCapture({ index, x })}
                                                    >
                                                        Editar
                                                    </button>
                                                </div>
                                            </td>
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
                                className="btn text-white"
                                style={{ background: "#008065" }}
                                data-bs-toggle="modal"
                                data-bs-target="#AgregarArticulosDetalles"
                            // disabled={formDetalles.Producto.nombre == "" ? true : false}
                            >
                                Agregar Articulos
                            </button>
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
                                style={{ background: "#00B2FF" }}
                            >
                                {" "}
                                Crear
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
}

export default EditarDetallesReporte
