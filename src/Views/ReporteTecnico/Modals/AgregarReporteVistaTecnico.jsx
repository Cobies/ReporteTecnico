/* eslint-disable react/prop-types */
import axios from "axios";
import SelectPro from "../../../Components/SelectPro";
import moment from "moment/moment";


const AgregarReporteVistaTecnica = ({ detalles }) => {

    const ReporteSubmit = async (e) => {
        e.preventDefault();
        const DocumentosPdf = e.target.DocumentosPdf.value;
        const Sugerencia = e.target.Sugerencia.value;
        const Activo = e.target.Activo.checked;
        const Cliente = JSON.parse(e.target.Cliente.value);
        const Empleado = JSON.parse(e.target.Empleado.value);
        try {
            const body = {
                Activo: Activo,
                Cliente: Cliente,
                Empleado: Empleado,
                FechaCreado: new Date(),
                Detalle: detalles,
                Sugerencia: Sugerencia,
                DocumentosPdf: DocumentosPdf.split('\n')
            }
            for (let i = 0; i < body.Detalle.length; i++) {
                delete body.Detalle[i].cantidad;
            }
            console.log(body)
            const response = await axios.post('https://localhost:7044/ReporteVisitaTecnica/SetReporteVisitaTecnica', body, {
                headers: { 'Content-Type': 'application/json' }
            })
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    // Alerta por si desea eliminar el producto
    // const handleEliminarProducto = () => {
    //     Swal.fire({
    //         title: '¿Estás seguro?',
    //         text: 'Esta acción eliminará el articulo permanentemente',
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#d33',
    //         cancelButtonColor: '#3085d6',
    //         confirmButtonText: 'Eliminar',
    //         cancelButtonText: 'Cancelar',
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             // Aquí puedes realizar la acción de eliminación del producto
    //             // Ejemplo: llamar a una función para eliminar el producto desde el backend
    //             // eliminarProducto();
    //         }
    //     })
    // }

    return (
        <div className="modal fade" id="AgregarReporteVistaTecnica" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true" >
            <div className="modal-dialog modal-dialog-scrollable modal-fullscreen p-5">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Agregar Reporte Vista Tecnico</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={ReporteSubmit}>
                            <div className="row">
                                <div className="form-check">
                                    <input className='form-check-input' type="checkbox"
                                        id="checkbox"
                                        name='Activo'
                                    />
                                    <label htmlFor="Activo" className="form-check-label" >Activo</label>
                                </div>

                                <div className="mb-3 col-6">
                                    <SelectPro name={"Cliente"} endpoint={"/Cliente/GetBusquedaClienteLimite/0&20"} nameExtractor={(x) => x.persona.nombre}></SelectPro>
                                </div>

                                <div className="mb-3 col-6">
                                    <SelectPro name={"Empleado"} endpoint={"/Empleado/GetAllEmpleado"} nameExtractor={(x) => x.persona.nombre} ></SelectPro>
                                </div>

                                <div className="mb-3 col-6">
                                    <div className="form-group">
                                        <label htmlFor="Sugerencia" className="form-label">Sugerencia</label>
                                        <textarea
                                            className='form-control'
                                            id='Sugerencia'
                                            name="Sugerencia"
                                            rows="4"
                                            cols="100"
                                            placeholder='Sugerencia'
                                        />
                                    </div>
                                </div>

                                <div className="mb-3 col-6">
                                    <div className="form-group">
                                        <label htmlFor="DocumentosPdf" className="form-label">DocumentosPdf</label>
                                        <textarea
                                            className='form-control'
                                            id='DocumentosPdf'
                                            name="DocumentosPdf"
                                            rows="4"
                                            cols="100"
                                            placeholder='Url'
                                        />
                                    </div>
                                </div>

                                <table className="table table-sm table-striped table-bordered" style={{ fontSize: "0.8rem" }}>
                                    <thead>
                                        <tr className='text-center'>
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
                                    <tbody>
                                        {detalles.length === 0 ? <tr > <td className="text-center" colSpan={9}>Vacio</td> </tr> : detalles.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.Articulos.length}</td>
                                                <td>{item.Producto?.Nombre}</td>
                                                <td>{item.Producto?.Marca?.nombre}</td>
                                                <td>{item.Producto?.Modelo}</td>
                                                <td>{item.Area}</td>
                                                <td>{moment(item.FechaCreado).format('L')}</td>
                                                <td>{item.condicion}</td>
                                                <td>{item.Observacion}</td>
                                                <td className="text-center">
                                                    <div className="d-flex justify-content-center gap-2 align-items-center">
                                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => console.log(item)}>Ver</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#AgregarDetallesReporte">Agregar Detalles</button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Crear</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgregarReporteVistaTecnica

