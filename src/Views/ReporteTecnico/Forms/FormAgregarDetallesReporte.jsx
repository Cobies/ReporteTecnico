import axios from 'axios';
import Swal from 'sweetalert2';


function FormAgregarDetallesReporte() {

  async function PostDetalle(e) {
    e.preventDefault();
    const cantidad = e.target.cantidad.value;
    try {
      const response = axios.post("https://localhost:7044/DetalleReporteVisitaTecnica/SetDetalleReporteVisitaTecnica", {

      }, {
        headers: { 'Content-Type': 'application/json' }
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

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
        console.log("Eliminado")
      }
    })
  }

  const ReporteGenerado = () => {
    Swal.fire(
      'Hecho!',
      'Reporte generado exitosamente :D!',
      'success'
    );
  };

  return (
    <>
      <div className="container" style={{ marginTop: "4rem" }}>

        <h3 style={{ marginBottom: "1rem" }} >Agregar Productos</h3>

        <form onSubmit={PostDetalle}>
          <div className="row">
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="cantidad" className="form-label">Cantidad</label>
                <input type="text" className="form-control" id="cantidad" name='cantidad' placeholder="Ingrese la cantidad" required></input>
              </div>
              <div className="mb-3">
                <label htmlFor="producto" className="form-label">Producto</label>
                <input type="text" className="form-control" id="producto" placeholder="Ingrese el producto" required></input>
              </div>
              <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">Descripción</label>
                <textarea className="form-control" id="descripcion" rows="3" placeholder="Ingrese la descripción"></textarea>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="marca" className="form-label">Marca</label>
                <input type="text" className="form-control" id="marca" placeholder="Ingrese la marca"></input>
              </div>
              <div className="mb-3">
                <label htmlFor="modelo" className="form-label">Modelo</label>
                <input type="text" className="form-control" id="modelo" placeholder="Ingrese el modelo"></input>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="area" className="form-label">Área</label>
                <input type="text" className="form-control" id="area" placeholder="Ingrese el área"></input>
              </div>
              <div className="mb-3">
                <label htmlFor="fechaCompra" className="form-label">Fecha de compra</label>
                <input type="date" className="form-control" id="fechaCompra"></input>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="condicion" className="form-label">Condición</label>
                <select className="form-select" id="condicion">
                  <option selected disabled>Seleccione una condición</option>
                  <option value="nuevo">Nuevo</option>
                  <option value="usado">Usado</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="observaciones" className="form-label">Observaciones</label>
                <textarea className="form-control" id="observaciones" rows="3" placeholder="Ingrese observaciones"></textarea>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Agregar</button>
        </form>


        <div className='table-responsive' style={{ marginTop: "1rem" }}>
          <table className="table table-sm table-striped table-bordered" style={{ fontSize: "0.8rem" }}>
            <thead>
              <tr className='text-center'>
                <th scope="col">CANTIDAD</th>
                <th scope="col">ARTICULO</th>
                <th scope="col">DESCRIPCION</th>
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
                <th scope="row">1</th>
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
            </tbody>
          </table>
        </div>
        <button className="btn btn-success" onClick={ReporteGenerado}>Generar Reporte</button>
      </div>

      {/* MODALES */}
      {/* <!-- Modal --> */}
      <div className="modal fade" id="ModalEditDetailProduct" tabIndex={-1} aria-labelledby="ModalEditDetailProductLabel" aria-hidden="true" style={{ marginTop: "3rem" }}>
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ModalEditDetailProductLabel">Editar Articulo</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label htmlFor="cantidad" className="form-label">Cantidad</label>
                      <input type="text" className="form-control" id="cantidad" placeholder="Ingrese la cantidad" required></input>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="producto" className="form-label">Producto</label>
                      <input type="text" className="form-control" id="producto" placeholder="Ingrese el producto" required></input>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="descripcion" className="form-label">Descripción</label>
                      <textarea className="form-control" id="descripcion" rows="3" placeholder="Ingrese la descripción"></textarea>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label htmlFor="marca" className="form-label">Marca</label>
                      <input type="text" className="form-control" id="marca" placeholder="Ingrese la marca"></input>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="modelo" className="form-label">Modelo</label>
                      <input type="text" className="form-control" id="modelo" placeholder="Ingrese el modelo"></input>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label htmlFor="area" className="form-label">Área</label>
                      <input type="text" className="form-control" id="area" placeholder="Ingrese el área"></input>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="fechaCompra" className="form-label">Fecha de compra</label>
                      <input type="date" className="form-control" id="fechaCompra"></input>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label htmlFor="condicion" className="form-label">Condición</label>
                      <select className="form-select" id="condicion">
                        <option selected disabled>Seleccione una condición</option>
                        <option value="nuevo">Nuevo</option>
                        <option value="usado">Usado</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="observaciones" className="form-label">Observaciones</label>
                      <textarea className="form-control" id="observaciones" rows="3" placeholder="Ingrese observaciones"></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary">Guardar Cambios</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormAgregarDetallesReporte;