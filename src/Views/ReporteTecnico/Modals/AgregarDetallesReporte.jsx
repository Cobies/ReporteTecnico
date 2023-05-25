import SelectPro from "../../../Components/SelectPro";
import moment from "moment";

/* eslint-disable react/prop-types */
function AgregarDetallesReporte({ articulos, detalles, setDetalles }) {

  async function PostDetalle(e) {
    e.preventDefault();
    // const cantidad = e.target.cantidad.value
    const observacion = e.target.observacion.value
    const area = e.target.area.value
    const { nombre, marca, linea, codigo } = JSON.parse(e.target.Producto.value)
    const modelo = e.target.modelo.value

    setDetalles([...detalles, { FechaCreado: new Date(), Observacion: observacion, Area: area, Articulos: articulos, Producto: { Nombre: nombre, Marca: marca, Linea: linea, Codigo: codigo, Modelo: modelo } }])
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
                    {/* <div className="mb-3">
                      <label htmlFor="cantidad" className="form-label">Cantidad</label>
                      <input type="text" className="form-control" id="cantidad" name='cantidad' placeholder="Ingrese la cantidad" required></input>
                    </div> */}
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
                <table className="table table-sm table-striped table-bordered" style={{ fontSize: "0.8rem" }}>
                  <thead>
                    <tr className='text-center'>
                      <th scope="col">FECHA CREADO</th>
                      <th scope="col">SERIE</th>
                      <th scope="col">OPERATIVO</th>
                      <th scope="col">OBSERVACIONES</th>
                      <th scope="col">FECHA COMPRA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {articulos.length === 0 ? <tr > <td className="text-center" colSpan={9}>Vacio</td> </tr> : articulos.map((x, index) => (
                      <tr key={index}>
                        <td>{moment(x.FechaCreado).format('L')}</td>
                        <td>{x.Serie}</td>
                        <td>{x.Operativo ? "Si" : "No"}</td>
                        <td>{x.Observaciones}</td>
                        <td>{moment(x.FechaCompra).format('L')}</td>
                        <td className="text-center">
                          <div className="d-flex justify-content-center gap-2 align-items-center">
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => console.log(x)}>Ver</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="modal-footer">
                  <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#AgregarArticulosDetalles">Agregar Articulos</button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" aria-hidden="true">Close</button>
                  <button type='submit' className="btn btn-success"> Crear</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AgregarDetallesReporte;