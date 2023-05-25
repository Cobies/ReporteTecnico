/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";


const AgregarArticulosDetalles = ({ detalles, articulos, setArticulos }) => {
    async function PostArticuloDetalle(e) {
        e.preventDefault();
        const fechaCompra = e.target.fechaCompra.value
        const operativo = e.target.operativo.checked
        const observaciones = e.target.observaciones.value
        const serie = uuidv4().substring(0, 8)
        console.log(serie)
        setArticulos([...articulos, { FechaCreado: new Date(), Serie: serie, Operativo: operativo, Observaciones: observaciones, FechaCompra: fechaCompra }])
    }

    return <div className="modal fade" id="AgregarArticulosDetalles" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" >
        <div className="modal-dialog modal-dialog-scrollable modal-fullscreen p-5">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Agregar Articulos</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body" >
                    <form onSubmit={PostArticuloDetalle}>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="fechaCompra" className="form-label">Fecha Creado</label>
                                    <input type="date" className="form-control" id="fechaCompra" name='fechaCompra' required></input>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="mb-3">
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" name="operativo" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Operativo</label>
                                    </div>
                                </div>
                                <div className="mb-3">

                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="observacion" className="form-label">Observaciones</label>
                                    <textarea className="form-control" id="observaciones" name="observaciones" rows="3" placeholder="Ingrese observaciones"></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" aria-hidden="true">Close</button>
                            <button type='submit' className="btn btn-success"> Crear</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
}
export default AgregarArticulosDetalles
