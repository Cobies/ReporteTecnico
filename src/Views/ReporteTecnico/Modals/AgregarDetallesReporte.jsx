import { useEffect, useState } from "react";
import SelectPro from "../../../Components/SelectPro";
import moment from "moment";

/* eslint-disable react/prop-types */
const AgregarDetallesReporte = ({ articulos, detalles, setDetalles, setArticulos }) => {
  const [formDetalles, setFormDetalles] = useState({
    observacion: "",
    area: "",
    Producto: {
      nombre: "",
      marca: "",
      linea: {
      },
      codigo: "",
      modelo: ""
    }
  })

  useEffect(() => {
    // console.log(formDetalles)
  }, [formDetalles])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox'
      ? checked : type === 'date'
        ? new Date(value) : value;

    setFormDetalles((prev) => ({
      ...prev,
      [name]: fieldValue,
    }))
  }

  const handleChangeProducto = (e) => {
    const { name, value } = e.target;
    setFormDetalles((prevFormDetalles) => ({
      ...prevFormDetalles,
      Producto: {
        ...prevFormDetalles.Producto,
        [name]: value
      }
    }));
  };

  const onCaptureObj = (producto) => {
    // Aquí puedes hacer lo que necesites con el objeto seleccionado
    setFormDetalles((prevState) => ({
      ...prevState,
      Producto: {
        ...prevState.Producto,
        nombre: producto.nombre,
        marca: producto.marca,
        linea: producto.linea,
        codigo: producto.codigo
      }
    }));
  };

  async function PostDetalle(e) {
    e.preventDefault();
    // const cantidad = e.target.cantidad.value
    setDetalles([
      ...detalles,
      {
        FechaCreado: new Date(),
        Observacion: formDetalles.observacion,
        Area: formDetalles.observacion,
        Articulos: articulos,
        Producto: formDetalles.Producto
      },
    ]);

    setFormDetalles((prevState) => ({
      ...prevState,
      observacion: "",
      area: "",
      Producto: {
        modelo: ""
      }
    }));

    setArticulos([])
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
      <div
        className="modal fade"
        id="AgregarDetallesReporte"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-fullscreen p-5">
          <div className="modal-content">
            <div className="modal-header text-white" style={{ background: "#00B2FF" }}>
              <h5 className="modal-title">Agregar Detalles</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={PostDetalle}>
                <div className="row">
                  <div className="col-md-3">
                    {/* <div className="mb-3">
                      <label htmlFor="cantidad" className="form-label">Cantidad</label>
                      <input type="text" className="form-control" id="cantidad" name='cantidad' placeholder="Ingrese la cantidad" required></input>
                    </div> */}
                    <div className="mb-3">
                      <SelectPro
                        name={"Producto"}
                        endpoint={"/ProductoReporte/GetBusquedaProductoReporteLimite"}
                        nameExtractor={(x) => x.nombre}
                        onCaptureObj={onCaptureObj}
                        SP={false}
                        modal="AgregarProducto"
                        initial={"/ProductoReporte/GetAllProductoReporteLimite/0"}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-floating mb-3">
                      <input autoComplete="off" name="area" value={formDetalles.area} onChange={handleChange} type="text" className="form-control" placeholder="area" />
                      <label htmlFor="area" className="form-label">Área</label>
                    </div>

                  </div>
                  <div className="col-md-3">
                    <div className="form-floating mb-3">
                      <input autoComplete="off" name="modelo" value={formDetalles.Producto.modelo} onChange={handleChangeProducto} type="text" className="form-control" placeholder="modelo" />
                      <label htmlFor="modelo" className="form-label">Modelo</label>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-floating mb-3">
                      <textarea
                        autoComplete="off"
                        className="form-control"
                        value={formDetalles.observacion}
                        onChange={handleChange}
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
                    {articulos.length === 0 ? (
                      <tr>
                        <td className="text-center" colSpan={9}>
                          Vacio
                        </td>
                      </tr>
                    ) : (
                      articulos.map((x, index) => (
                        <tr key={index}>
                          <td>{moment(x.FechaCreado).format("L")}</td>
                          <td>{x.Serie}</td>
                          <td>{x.Operativo ? <i className="bi bi-check text-success"></i> : <i className="bi bi-x-lg text-danger"></i>}</td>
                          <td>{x.Observaciones}</td>
                          <td>{moment(x.FechaCompra).format("L")}</td>
                          <td className="text-center">
                            <div className="d-flex justify-content-center gap-2 align-items-center">
                              <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                onClick={() => console.log(x)}
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
                <div className="modal-footer" style={{ position: "absolute", bottom: "0", right: "0", width: "100%" }}>
                  <button
                    type="button"
                    className="btn text-white" style={{ background: "#008065" }}
                    data-bs-toggle="modal"
                    data-bs-target="#AgregarArticulosDetalles"
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
                  <button type="submit" className="btn text-white" style={{ background: "#00B2FF" }}>
                    {" "}
                    Crear
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgregarDetallesReporte;
