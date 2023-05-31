import axios from "axios";
import { useEffect, useState } from "react";

const AgregarLinea = () => {

  const [formLinea, setFormLinea] = useState({ nombre: "", descripcion: "" })
  const [message, setMessage] = useState("")

  useEffect(() => {
    console.log(formLinea)
  }, [formLinea])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue =
      type === "checkbox" ? checked : type === "date" ? new Date(value) : value;
    setFormLinea((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
  };

  async function postLinea(e) {
    e.preventDefault()
    if (!formLinea.nombre || !formLinea.descripcion) {
      setMessage("Completa los campos que faltan")
    } else {
      const response = await axios.post("https://localhost:7044/Linea/SetLinea", { nombre: formLinea.nombre.toUpperCase(), descripcion: formLinea.descripcion.toUpperCase() }, {
        headers: {
          // Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json"
        }
      })
      console.log(response.data)
      setFormLinea({ nombre: "", descripcion: "" })
    }

  }

  return (
    <div
      style={{ paddingTop: "15%" }}
      className="modal fade"
      id="AgregarLinea"
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
            <h5 className="modal-title">Agregar Linea</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={postLinea}>
              <div className="row">
                <div className="col-md-6 pb-3">
                  <div className="form-floating">
                    <input
                      name="nombre"
                      value={formLinea.nombre.toUpperCase()}
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
                <div className="col-md-6 pb-3">
                  <div className="form-floating">
                    <input
                      name="descripcion"
                      value={formLinea.descripcion.toUpperCase()}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      placeholder="descripcion"
                    />
                    <label htmlFor="descripcion" className="form-label">
                      Descripcion
                    </label>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <label className="text-danger">{message}</label>
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
                  Crear Linea
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgregarLinea;
