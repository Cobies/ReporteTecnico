/* eslint-disable react/prop-types */
import axios from "axios";
import SelectPro from "../Selects/SelectPro";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import { GetAllReportes } from "../../../Services/ReporteVistaTecnico";

const AgregarReporteVistaTecnica = ({
  detalles,
  setDetalles,
  session,
  setArticulos,
  setReporteVisitaTecnica,
  setCaptureDetalles
}) => {
  const [perfil, setPerfil] = useState({});
  const [formReporteVistaTecnica, setFormReporteVistaTecnica] = useState({
    Activo: true,
    Sugerencia: "",
    Cliente: null,
  });
  const [message, setMessage] = useState("");

  const ReporteSubmit = async (e) => {
    e.preventDefault();
    try {
      for (let i = 0; i < detalles.length; i++) {
        delete detalles[i].cantidad;
      }

      if (!detalles || !formReporteVistaTecnica.Cliente || !perfil) {
        setMessage("ALGO FALTA PARA ENVIAR")
        return
      }
      const body = {
        Numero: 5,
        Activo: formReporteVistaTecnica.Activo,
        Cliente: formReporteVistaTecnica.Cliente,
        Empleado: perfil,
        FechaCreado: new Date(),
        Detalle: detalles,
        Sugerencia: formReporteVistaTecnica.Sugerencia,
      }
      console.log("ESTE ", body)
      const response = await axios.post(
        "https://api.grupoupgrade.com.pe/ReporteVisitaTecnica/SetReporteVisitaTecnica",
        body,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      setDetalles([]);
      setArticulos([]);
      setMessage("");
      setFormReporteVistaTecnica((prevState) => ({
        ...prevState,
        Cliente: null,
        FechaCreado: null,
        Detalle: null,
        Activo: true,
        Sugerencia: "",
      }));
      const data = await GetAllReportes();
      setReporteVisitaTecnica(data);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // console.log(formReporteVistaTecnica);
  }, [formReporteVistaTecnica]);

  useEffect(() => {
    getPerfil(session.id);
  }, []);

  async function getPerfil(id) {
    try {
      const response = await axios.get(
        `https://api.grupoupgrade.com.pe/Empleado/GetEmpleadoId/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setPerfil(response.data);
    } catch (error) {
      console.log("");
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue =
      type === "checkbox" ? checked : type === "date" ? new Date(value) : value;
    setFormReporteVistaTecnica((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
  };

  const onCaptureObj = (cliente) => {
    // Aquí puedes hacer lo que necesites con el objeto seleccionado
    setFormReporteVistaTecnica((prevState) => ({
      ...prevState,
      Cliente: cliente,
    }));
  };

  useEffect(() => {
    console.log(formReporteVistaTecnica)
  }, [formReporteVistaTecnica])

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
    <div
      className="modal fade"
      id="AgregarReporteVistaTecnica"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal-fullscreen p-5">
        <div className="modal-content">
          <div
            className="modal-header text-white"
            style={{ background: "#00B2FF" }}
          >
            <h5 className="modal-title">Agregar Reporte Vista Tecnico</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={ReporteSubmit}>
              <div className="row">
                <div className="form-check">
                  <div className="form-check form-switch">
                    <input
                      checked={formReporteVistaTecnica.Activo}
                      onChange={handleChange}
                      style={{
                        backgroundColor: formReporteVistaTecnica.Activo
                          ? "#00B2FF"
                          : null,
                        border: "none",
                      }}
                      className="form-check-input"
                      name="Activo"
                      type="checkbox"
                      role="switch"
                    />
                    <label className="form-check-label" htmlFor="Activo">
                      Activo
                    </label>
                  </div>
                </div>

                <div className="mb-3 col-4">
                  <SelectPro
                    onCaptureObj={onCaptureObj}
                    name={"Cliente"}
                    endpoint={"/Cliente/GetBusquedaClienteLimite"}
                    nameExtractor={(x) => x.persona.nombre}
                    SP={false}
                    modal="AgregarCliente"
                    initial={"/Cliente/GetAllClientesLimite/0"}
                  />
                </div>

                <div className="mb-3 col-4">
                  <div className="form-floating mb-3">
                    <input
                      autoComplete="off"
                      value={perfil.persona?.nombre}
                      type="text"
                      className="form-control"
                      id="Empleado"
                      placeholder="Empleado"
                      readOnly
                    />
                    <label htmlFor="Empleado">Empleado</label>
                    <input
                      type="hidden"
                      name="Empleado"
                      value={JSON.stringify(perfil)}
                    />
                  </div>
                  {/* <SelectPro name={"Empleado"} endpoint={"/Empleado/GetAllEmpleado"} nameExtractor={(x) => x.persona.nombre} SP={true} /> */}
                </div>

                <div className="mb-3 col-4">
                  <div className="form-floating">
                    <textarea
                      autoComplete="off"
                      value={formReporteVistaTecnica.Sugerencia}
                      onChange={handleChange}
                      className="form-control"
                      id="Sugerencia"
                      name="Sugerencia"
                      rows={4}
                      cols="100"
                      placeholder="Sugerencia"
                    />
                    <label htmlFor="Sugerencia" className="form-label">
                      Obs. General
                    </label>
                  </div>
                </div>

                <div className="mb-3 col-6">
                  {/* <div className="form-group">
                                        <label htmlFor="DocumentosPdf" className="form-label">DocumentosPdf</label>
                                        <textarea
                                            className='form-control'
                                            id='DocumentosPdf'
                                            name="DocumentosPdf"
                                            rows="4"
                                            cols="100"
                                            placeholder='Url'
                                        />
                                    </div> */}
                </div>

                <table
                  className="table table-sm table-striped table-bordered"
                  style={{ fontSize: "0.8rem" }}
                >
                  <thead style={{ background: "#00B2FF" }}>
                    <tr className="text-center text-white">
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
                  <tbody className="text-center">
                    {detalles.length === 0 ? (
                      <tr>
                        {" "}
                        <td className="text-center" colSpan={9}>
                          Vacio
                        </td>{" "}
                      </tr>
                    ) : (
                      detalles.map((item, index) => (
                        <tr key={index}>
                          <td>{item.Articulos.length}</td>
                          <td>{item.Producto?.nombre}</td>
                          <td>{item.Producto?.marca?.nombre}</td>
                          <td>{item.Producto?.modelo}</td>
                          <td>{item.Area}</td>
                          <td>{moment(item.FechaCreado).format("L")}</td>
                          <td>{item.condicion}</td>
                          <td>{item.Observacion}</td>
                          <td className="text-center">
                            <div className="d-flex justify-content-center gap-2 align-items-center">
                              <button
                                type="button"
                                className="btn"
                                style={{ background: "#00B2FF", color: "white" }}
                                data-bs-toggle="modal"
                                data-bs-target="#VerDetallesReporte"
                                onClick={() => setCaptureDetalles(item)}
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
              </div>
              <div
                className="modal-footer"
                style={{
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                  width: "100%",
                }}
              >
                <label className="text-danger">{message}</label>
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#AgregarDetallesReporte"
                  disabled={!formReporteVistaTecnica.Cliente?.persona?.nombre ? true : false}
                >
                  Agregar Detalles
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn text-white"
                  style={{ background: "#00B2FF" }}
                  data-bs-dismiss="modal"
                  disabled={detalles.length == 0 || !formReporteVistaTecnica.Cliente?.persona?.nombre ? true : false}
                >
                  Crear
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgregarReporteVistaTecnica;
