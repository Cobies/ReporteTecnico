import axios from "axios";
import SelectPro from "../../../Components/SelectPro";
import { useState } from "react";
import Swal from 'sweetalert2';

const AgregarReporteVistaTecnica = () => {

    const [detalles, setDetalles] = useState([{}])

    const ReporteSubmit = async (e) => {
        e.preventDefault();
        const DocumentosPdf = e.target.DocumentosPdf.value;
        const Sugerencia = e.target.Sugerencia.value;
        const Activo = e.target.Activo.checked;
        const Cliente = e.target.Cliente.value;
        const Empleado = e.target.Empleado.value;

        try {
            const response = await axios.post('https://localhost:7044/ReporteVisitaTecnica/SetReporteVisitaTecnica', {
                Activo: Activo,
                Cliente: JSON.parse(Cliente),
                Empleado: JSON.parse(Empleado),
                FechaCreado: new Date(),
                Sugerencia: Sugerencia,
                DocumentosPdf: DocumentosPdf.split('\n')
            }, {
                headers: { 'Content-Type': 'application/json' }
            })
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    };

    // Alerta por si desea eliminar el producto
    const handleEliminarProducto = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Esta acción eliminará el articulo permanentemente',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                // Aquí puedes realizar la acción de eliminación del producto
                // Ejemplo: llamar a una función para eliminar el producto desde el backend
                // eliminarProducto();
            }
        })
    }

    return (
        <div className="modal fade" id="AgregarReporteVistaTecnica" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true" >
            <div className="modal-dialog modal-dialog-scrollable modal-lg">
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
                                            <th scope="col">Articulo</th>
                                            <th scope="col">Descripción</th>
                                            <th scope="col">MARCA</th>
                                            <th scope="col">MODELO</th>
                                            <th scope="col">AREA</th>
                                            <th scope="col">FECHA DE COMPRA</th>
                                            <th scope="col">CONDICION</th>
                                            <th scope="col">OBSERVACIONES</th>
                                            <th scope="col">ACCIONES</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>PC- AIO</td>
                                            <td>Procesador core i3-1011ou 2.10Ghz RAM 8GB, Windows 10 pro SSD 256 HDD 1Tb Teclado hp Mouse Hp</td>
                                            <td>HP</td>
                                            <td>200G422</td>
                                            <td>Centro de Computo</td>
                                            <td>20/10/2022</td>
                                            <td>OPERATIVO</td>
                                            <td>Equipo con varios años de uso, requiere mantenimient, cambio de ventiladores.</td>
                                            <td className="text-center">
                                                <div className="d-flex justify-content-center gap-2 align-items-center">
                                                    <button type="button" className="btn btn-success border border-0 bi bi-pencil" data-bs-toggle="modal" data-bs-target="#ModalEditDetailProduct" style={{ fontSize: "0.8rem", padding: "0.3rem 0.4rem" }}></button>
                                                    {/* <button type="button" className="btn btn-danger border border-0 bi bi-trash-fill" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ fontSize: "0.8rem", padding: "0.3rem 0.4rem" }}></button> */}
                                                    <button type="button" className="btn btn-danger border border-0 bi bi-trash-fill" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ fontSize: "0.8rem", padding: "0.3rem 0.4rem" }} onClick={handleEliminarProducto}></button>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* {data.map((item) => (
                                            <tr key={item.id}>
                                                <td scope="row">{item.Cantidad}</td>
                                                <td>{item.Articulo}</td>
                                                <td>{item.Descripcion}</td>
                                                <td>{item.Marca}</td>
                                                <td>{item.Modelo}</td>
                                                <td>{item.Area}</td>
                                                <td>{item.FechaCompra}</td>
                                                <td>{item.Condicion}</td>
                                                <td>{item.Observaciones}</td>
                                                <td className="text-center">
                                                    <div className="d-flex justify-content-center gap-2 align-items-center">
                                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setProductoSeleccionado(item)}>Ver</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))} */}
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#AgregarDetallesReporte"> Agregar Detalles</button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Editar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>)
}

export default AgregarReporteVistaTecnica

