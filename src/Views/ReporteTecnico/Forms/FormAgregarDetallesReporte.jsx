import Swal from 'sweetalert2';


function FormAgregarDetallesReporte() {

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
        eliminarProducto();
      }
    });
  };

  const ReporteGenerado = () => {
    Swal.fire(
      'Hecho!',
      'Reporte generado exitosamente :D!',
      'success'
    );
  };

  return (
    <>
      <div class="container" style={{ marginTop: "4rem" }}>

        <h3 style={{ marginBottom: "1rem" }} >Agregar Productos</h3>

        <form>
          <div class="row">
            <div class="col-md-3">
              <div class="mb-3">
                <label for="cantidad" class="form-label">Cantidad</label>
                <input type="text" class="form-control" id="cantidad" placeholder="Ingrese la cantidad" required></input>
              </div>
              <div class="mb-3">
                <label for="producto" class="form-label">Producto</label>
                <input type="text" class="form-control" id="producto" placeholder="Ingrese el producto" required></input>
              </div>
              <div class="mb-3">
                <label for="descripcion" class="form-label">Descripción</label>
                <textarea class="form-control" id="descripcion" rows="3" placeholder="Ingrese la descripción"></textarea>
              </div>
            </div>
            <div class="col-md-3">
              <div class="mb-3">
                <label for="marca" class="form-label">Marca</label>
                <input type="text" class="form-control" id="marca" placeholder="Ingrese la marca"></input>
              </div>
              <div class="mb-3">
                <label for="modelo" class="form-label">Modelo</label>
                <input type="text" class="form-control" id="modelo" placeholder="Ingrese el modelo"></input>
              </div>
            </div>
            <div class="col-md-3">
              <div class="mb-3">
                <label for="area" class="form-label">Área</label>
                <input type="text" class="form-control" id="area" placeholder="Ingrese el área"></input>
              </div>
              <div class="mb-3">
                <label for="fechaCompra" class="form-label">Fecha de compra</label>
                <input type="date" class="form-control" id="fechaCompra"></input>
              </div>
            </div>
            <div class="col-md-3">
              <div class="mb-3">
                <label for="condicion" class="form-label">Condición</label>
                <select class="form-select" id="condicion">
                  <option selected disabled>Seleccione una condición</option>
                  <option value="nuevo">Nuevo</option>
                  <option value="usado">Usado</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="observaciones" class="form-label">Observaciones</label>
                <textarea class="form-control" id="observaciones" rows="3" placeholder="Ingrese observaciones"></textarea>
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Agregar</button>
        </form>


        <div className='table-responsive' style={{ marginTop: "1rem" }}>
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
                    <button type="button" class="btn btn-success border border-0 bi bi-pencil" data-bs-toggle="modal" data-bs-target="#ModalEditDetailProduct" style={{ fontSize: "0.8rem", padding: "0.3rem 0.4rem" }}></button>
                    {/* <button type="button" class="btn btn-danger border border-0 bi bi-trash-fill" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ fontSize: "0.8rem", padding: "0.3rem 0.4rem" }}></button> */}
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
      <div class="modal fade" id="ModalEditDetailProduct" tabindex="-1" aria-labelledby="ModalEditDetailProductLabel" aria-hidden="true" style={{ marginTop: "3rem" }}>
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="ModalEditDetailProductLabel">Editar Articulo</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="row">
                  <div class="col-md-3">
                    <div class="mb-3">
                      <label for="cantidad" class="form-label">Cantidad</label>
                      <input type="text" class="form-control" id="cantidad" placeholder="Ingrese la cantidad" required></input>
                    </div>
                    <div class="mb-3">
                      <label for="producto" class="form-label">Producto</label>
                      <input type="text" class="form-control" id="producto" placeholder="Ingrese el producto" required></input>
                    </div>
                    <div class="mb-3">
                      <label for="descripcion" class="form-label">Descripción</label>
                      <textarea class="form-control" id="descripcion" rows="3" placeholder="Ingrese la descripción"></textarea>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="mb-3">
                      <label for="marca" class="form-label">Marca</label>
                      <input type="text" class="form-control" id="marca" placeholder="Ingrese la marca"></input>
                    </div>
                    <div class="mb-3">
                      <label for="modelo" class="form-label">Modelo</label>
                      <input type="text" class="form-control" id="modelo" placeholder="Ingrese el modelo"></input>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="mb-3">
                      <label for="area" class="form-label">Área</label>
                      <input type="text" class="form-control" id="area" placeholder="Ingrese el área"></input>
                    </div>
                    <div class="mb-3">
                      <label for="fechaCompra" class="form-label">Fecha de compra</label>
                      <input type="date" class="form-control" id="fechaCompra"></input>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="mb-3">
                      <label for="condicion" class="form-label">Condición</label>
                      <select class="form-select" id="condicion">
                        <option selected disabled>Seleccione una condición</option>
                        <option value="nuevo">Nuevo</option>
                        <option value="usado">Usado</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label for="observaciones" class="form-label">Observaciones</label>
                      <textarea class="form-control" id="observaciones" rows="3" placeholder="Ingrese observaciones"></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" class="btn btn-primary">Guardar Cambios</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormAgregarDetallesReporte;