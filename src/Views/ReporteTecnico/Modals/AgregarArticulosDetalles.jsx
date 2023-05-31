/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AgregarArticulosDetalles = ({ articulos, setArticulos }) => {
  const [formArticulos, setFormArticulos] = useState({
    fechaCompra: "",
    operativo: true,
    observaciones: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue =
      type === "checkbox" ? checked : type === "date" ? new Date(value) : value;

    setFormArticulos((prevFormArticulos) => ({
      ...prevFormArticulos,
      [name]: fieldValue,
    }));
  };

  useEffect(() => {}, [formArticulos]);
  // const ModalArticulos = useRef(null);
  // useEffect(() => {
  //     const handleModalClose = () => {
  //         // Lógica a ejecutar al cerrar el modal
  //         console.log("Modal cerrado");
  //         // Agrega aquí tu script personalizado al cerrar el modal
  //     };

  //     // Agrega un event listener al evento 'hidden.bs.modal'
  //     ModalArticulos.current.addEventListener(
  //         "hidden.bs.modal",
  //         handleModalClose
  //     );

  //     // Limpia el event listener cuando el componente se desmonte
  //     return () => {
  //         ModalArticulos.current.removeEventListener(
  //             "hidden.bs.modal",
  //             handleModalClose
  //         );
  //     };
  // }, []);

  async function PostArticuloDetalle(e) {
    e.preventDefault();
    setArticulos([
      ...articulos,
      {
        FechaCreado: new Date(),
        Serie: uuidv4().substring(0, 8),
        Operativo: formArticulos.operativo,
        Observaciones: formArticulos.observaciones,
        FechaCompra: formArticulos.fechaCompra,
      },
    ]);
    setFormArticulos({
      fechaCompra: "",
      operativo: true,
      observaciones: "",
    });
  }

  return (
    <div
      // ref={ModalArticulos}
      style={{ paddingTop: "15%" }}
      className="modal fade"
      id="AgregarArticulosDetalles"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div
            className="modal-header text-white"
            style={{ background: "#00B2FF" }}
          >
            <h5 className="modal-title">Agregar Articulos</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={PostArticuloDetalle}>
              <div className="col-md-4">
                <div className="mb-3">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      name="operativo"
                      type="checkbox"
                      role="switch"
                      value={formArticulos.operativo}
                      onChange={handleChange}
                      defaultChecked={true}
                      style={{
                        backgroundColor: formArticulos.operativo
                          ? "#00B2FF"
                          : null,
                        border: "none",
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    >
                      Operativo
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="date"
                      className="form-control"
                      name="fechaCompra"
                      value={
                        formArticulos.fechaCompra
                          ? formArticulos.fechaCompra
                              .toISOString()
                              .substr(0, 10)
                          : ""
                      }
                      onChange={handleChange}
                      required
                    ></input>
                    <label htmlFor="fechaCompra" className="form-label">
                      Fecha Compra
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      id="observaciones"
                      name="observaciones"
                      value={formArticulos.observaciones}
                      onChange={handleChange}
                      rows="3"
                      placeholder="Ingrese observaciones"
                    ></textarea>
                    <label htmlFor="observacion" className="form-label">
                      Observaciones
                    </label>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
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
  );
};
export default AgregarArticulosDetalles;
