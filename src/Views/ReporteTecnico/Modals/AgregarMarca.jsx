import axios from "axios";
import { useEffect, useState } from "react";

const AgregarMarca = () => {

  const [formMarca, setFormMarca] = useState({ nombre: "", abreviatura: "" })
  // const [message, setMessage] = useState("");

  useEffect(() => {
    console.log(formMarca)
  }, [formMarca])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue =
      type === "checkbox" ? checked : type === "date" ? new Date(value) : value;
    setFormMarca((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
  };

  async function postMarca(e) {
    e.preventDefault()
    const response = await axios.post("https://localhost:7044/Marca/SetMarca", { nombre: formMarca.nombre.toUpperCase(), abreviatura: formMarca.abreviatura.toUpperCase() }, {
      headers: {
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      }
    })
    console.log(response.data)
    setFormMarca({ nombre: "", abreviatura: "" })
    // setMessage("")
  }

  return (
    <div
      style={{ paddingTop: "15%" }}
      className="modal fade"
      id="AgregarMarca"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div
            className="modal-header text-white"
            style={{ background: "#00B2FF" }}
          >
            <h5 className="modal-title">Agregar Marca</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={postMarca}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      name="nombre"
                      value={formMarca.nombre.toUpperCase()}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      placeholder="nombre"
                    />
                    <label htmlFor="nombre" className="form-label">
                      Nombre
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      name="abreviatura"
                      value={formMarca.abreviatura.toUpperCase()}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      placeholder="abreviatura"
                    />
                    <label htmlFor="abreviatura" className="form-label">
                      Abreviatura
                    </label>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                {/* <label className="text-danger">{message}</label> */}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
                <button
                  type="submit"
                  className="btn text-white"
                  data-bs-dismiss="modal"
                  style={{ background: "#00B2FF" }}
                >
                  Crear Marca
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgregarMarca;
