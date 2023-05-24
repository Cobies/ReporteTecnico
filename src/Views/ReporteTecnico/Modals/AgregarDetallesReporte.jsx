import SelectPro from "../../../Components/SelectPro";

/* eslint-disable react/prop-types */
function AgregarDetallesReporte({ detalles, setDetalles }) {



  async function PostDetalle(e) {
    e.preventDefault();
    const cantidad = e.target.cantidad.value
    const observacion = e.target.observacion.value
    const area = e.target.area.value
    const { nombre, marca, linea, codigo } = JSON.parse(e.target.Producto.value)
    const modelo = e.target.modelo.value

    setDetalles([...detalles, { cantidad: cantidad, FechaCreado: new Date(), Observacion: observacion, Area: area, Producto: { Nombre: nombre, Marca: marca, Linea: linea, Codigo: codigo, Modelo: modelo } }])
    // setReporteVisitaTecnica((prevState) => [
    //   ...prevState,
    //   {
    //     cantidad: cantidad,
    //     fechaCreado: new Date().toDateString(),
    //     observacion: observacion,
    //     area: area,
    //     Producto: {
    //       nombre: nombre,
    //       marca: marca,
    //       linea: linea,
    //       codigo: codigo,
    //       modelo: modelo,
    //     },
    //   },
    // ])
    // try {
    //   const response = axios.post("https://localhost:7044/DetalleReporteVisitaTecnica/SetDetalleReporteVisitaTecnica", {
    //   }, {
    //     headers: { 'Content-Type': 'application/json' }
    //   })
    //   console.log(response)
    // } catch (error) {
    //   console.log(error)
    // }
  }
  return (
    <>
      <div className="modal fade" id="AgregarDetallesReporte" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" >
        <div className="modal-dialog modal-dialog-scrollable modal-fullscreen p-5">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Agregar Detalles</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" >
              <form onSubmit={PostDetalle}>
                <div className="row">
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label htmlFor="cantidad" className="form-label">Cantidad</label>
                      <input type="text" className="form-control" id="cantidad" name='cantidad' placeholder="Ingrese la cantidad" required></input>
                    </div>
                    <div className="mb-3">
                      <SelectPro name={"Producto"} endpoint={"/Producto/GetBusquedaProductoLimite/0&20"} nameExtractor={(x) => x.nombre} />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label htmlFor="area" className="form-label">Área</label>
                      <input type="text" className="form-control" name="area" id="area" placeholder="Ingrese el área"></input>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="modelo" className="form-label">Modelo</label>
                      <input type="text" className="form-control" name="modelo" id="Modelo" placeholder="Ingrese el área"></input>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label htmlFor="observacion" className="form-label">Observacion</label>
                      <textarea className="form-control" id="observación" name="observacion" rows="3" placeholder="Ingrese observaciones"></textarea>
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
      {/* MODALES */}
      {/* <!-- Modal --> */}
      {/* <div className="modal fade" id="ModalEditDetailProduct" tabIndex={-1} aria-labelledby="ModalEditDetailProductLabel" aria-hidden="true" style={{ marginTop: "3rem" }}>
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
      </div> */}

    </>
  );
}

export default AgregarDetallesReporte;