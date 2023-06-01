import { useEffect, useState } from "react";
import SelectPro from "../../../Components/SelectPro";
import axios from "axios";

const AgregarCliente = () => {
  const [formCliente, setFormCliente] = useState({
    departamento: {},
    provincia: null,
    distrito: null,
    nombre: "",
    documento: "",
    correoElectronico: "",
    tipoDocumentoIdentidad: null,
    telefono: "",
    direccion: ""
  });

  const [message, setMessage] = useState("")

  async function postCliente(e) {
    e.preventDefault()
    if (!formCliente.nombre || !formCliente.tipoDocumentoIdentidad || !formCliente.documento || !formCliente.direccion || !formCliente.telefono || !formCliente.distrito) {
      setMessage("Campos obligatorios *")
      return
    }
    const response = await axios.post(`https://api.grupoupgrade.com.pe/Persona/SetPersona`, {
      nombre: formCliente.nombre,
      documentoIdentidad: formCliente.documento,
      tipoDocumentoIdentidad: formCliente.tipoDocumentoIdentidad,
      direccion: formCliente.direccion,
      email: formCliente.correoElectronico,
      telefono: formCliente.telefono,
      distrito: formCliente.distrito
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      }
    })
    const responseCliente = await axios.post(`https://api.grupoupgrade.com.pe/Cliente/SetCliente`, {
      FechaRegistro: new Date(),
      persona: {
        _id: response.data,
        nombre: formCliente.nombre.toUpperCase(),
        documentoIdentidad: formCliente.documento,
        tipoDocumentoIdentidad: formCliente.tipoDocumentoIdentidad,
        direccion: formCliente.direccion.toUpperCase(),
        email: formCliente.correoElectronico,
        telefono: formCliente.telefono,
        distrito: formCliente.distrito
      }
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      }
    })
    console.log(responseCliente.data)
    setFormCliente(prevState => ({
      ...prevState,
      departamento: {},
      provincia: null,
      distrito: null,
      nombre: "",
      documento: "",
      correoElectronico: "",
      telefono: "",
      direccion: ""
    }));
    setMessage("")
  }


  const GetData = async (numero) => {
    const response = await axios.get(`https://api.grupoupgrade.com.pe/Cliente/ObtenerDNI/${numero}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      }
    })
    console.log(response.data)
    setFormCliente({ ...formCliente, nombre: response.data.nombre })
    setMessage("")
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue =
      type === "checkbox" ? checked : type === "date" ? new Date(value) : value;
    setFormCliente((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
  };

  useEffect(() => {
    console.log(formCliente);
  }, [formCliente]);
  return (
    <div
      style={{ paddingTop: "40px" }}
      className="modal fade"
      id="AgregarCliente"
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
            <h5 className="modal-title" id="exampleModalLabel">
              Agregar Cliente
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={postCliente}>
              <div className="row">
                <div className="col-md-6 pb-3">
                  <SelectPro
                    name={"Tipo Documento Identidad"}
                    nameExtractor={(x) => x.abreviatura}
                    onCaptureObj={(x) =>
                      setFormCliente({ ...formCliente, tipoDocumentoIdentidad: x })
                    }
                    SM={true}
                    SP={true}
                    endpoint={"/TipoDocumentoIdentidad/GetAllTipoDocumentoIdentidad"}
                  />
                </div>
                <div className="col-md-6 pb-3">
                  <div className="input-group form-floating">
                    <input
                      autoComplete="off"
                      name="documento"
                      value={formCliente.documento}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      placeholder="documento"
                    />
                    <label htmlFor="documento" className="form-label">
                      N° Documento *
                    </label>
                    <button
                      style={{ background: "#00B2FF", borderRadius: 3, border: "none" }}
                      onClick={() => formCliente.tipoDocumentoIdentidad && formCliente.documento ? GetData(formCliente.documento) : setMessage("Falta TipoDocumento o Numero")}
                      className="btn btn-outline-secondary"
                      type="button"
                    >
                      <i
                        className="bi bi-search text-white"
                        style={{ fontSize: 12 }}
                      ></i>
                    </button>
                  </div>
                </div>
                <div className="col-md-12 pb-3">
                  <div className="form-floating">
                    <input
                      autoComplete="off"
                      name="nombre"
                      value={formCliente.nombre.toUpperCase()}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      placeholder="nombre"
                    />
                    <label htmlFor="nombre" className="form-label">
                      Apellidos y Nombres *
                    </label>
                  </div>
                </div>
                <div className="col-md-6 pb-3">
                  <div className="form-floating">
                    <input
                      autoComplete="off"
                      name="telefono"
                      value={formCliente.telefono}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      placeholder="telefono"
                    />
                    <label htmlFor="telefono" className="form-label">
                      Telefono *
                    </label>
                  </div>
                </div>
                <div className="col-md-6 pb-3">
                  <SelectPro
                    name={"Departamento"}
                    onCaptureObj={(x) =>
                      setFormCliente({
                        ...formCliente,
                        departamento: x,
                        provincia: null,
                      })
                    }
                    nameExtractor={(x) => x.nombre}
                    endpoint={"/Departamento/GetAllDepartamento"}
                    SP={true}
                    SM={true}
                  />
                </div>
                <div className="col-md-6 pb-3">
                  <SelectPro
                    name={"Provincia"}
                    onCaptureObj={(x) =>
                      setFormCliente({
                        ...formCliente,
                        provincia: x,
                        distrito: null,
                      })
                    }
                    nameExtractor={(x) => x.nombre}
                    endpoint={"/Provincia/GetProvinciaForDepartamento"}
                    SP={false}
                    SM={true}
                    id={formCliente.departamento?._id}
                  />
                </div>
                <div className="col-md-6 pb-3">
                  <SelectPro
                    name={"Distrito"}
                    onCaptureObj={(x) =>
                      setFormCliente({ ...formCliente, distrito: x })
                    }
                    nameExtractor={(x) => x.nombre}
                    endpoint={"/Distrito/GetDistritoForProvincia"}
                    SP={false}
                    SM={true}
                    id={formCliente.provincia?._id}
                  />
                </div>
                <div className="col-md-12 pb-3">
                  <div className="form-floating">
                    <input
                      autoComplete="off"
                      name="direccion"
                      value={formCliente.direccion.toUpperCase()}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      placeholder="direccion"
                    />
                    <label htmlFor="direccion" className="form-label">
                      Dirección *
                    </label>
                  </div>
                </div>
                <div className="col-md-12 pb-3">
                  <div className="form-floating">
                    <input
                      autoComplete="off"
                      name="correoElectronico"
                      value={formCliente.correoElectronico}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      placeholder="correoElectronico"
                    />
                    <label htmlFor="correoElectronico" className="form-label">
                      Correo Electronico
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
                  style={{ background: "#00B2FF" }}
                >
                  Crear Cliente
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgregarCliente;
