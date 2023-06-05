import axios from "axios";
import { useEffect, useState } from "react"

const AgregarUsuarioCliente = () => {

    const [formUsuarioCliente, setFormUsuarioCliente] = useState({ usuario: "", password: "" })
    const [message, setMessage] = useState("")

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldValue =
            type === "checkbox" ? checked : type === "date" ? new Date(value) : value;
        setFormUsuarioCliente((prev) => ({
            ...prev,
            [name]: fieldValue,
        }));
    };

    async function postUsuarioCliente(e) {
        e.preventDefault()
        if (!formUsuarioCliente.usuario || !formUsuarioCliente.password) {
            setMessage("Completa los campos que faltan")
        } else {
            const response = await axios.post("https://localhost:7044/UsuarioClienteReporteTecnico/SetUsuarioClienteReporteTecnico", { fechaCreado: new Date(), cliente: { usuario: formUsuarioCliente.usuario, password: formUsuarioCliente.password } }, {
                headers: {
                    // Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json"
                }
            })
            // console.log(response.data)
            setFormUsuarioCliente({ usuario: "", password: "" })
        }

    }

    useEffect(() => {
        // console.log(formUsuarioCliente)
    }, [formUsuarioCliente])

    return <div
        style={{ paddingTop: "15%" }}
        className="modal fade"
        id="AgregarUsuarioCliente"
        tabIndex={-1}
        aria-labelledby="AgregarUsuarioCliente"
        aria-hidden="true"
    >
        <div className="modal-dialog">
            <div className="modal-content">
                <div
                    className="modal-header text-white"
                    style={{ background: "#00B2FF" }}
                >
                    <h5 className="modal-title">Agregar Usuario Cliente</h5>
                    <button
                        type="button"
                        className="btn-close btn-close-white"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="modal-body">
                    <form onSubmit={postUsuarioCliente}>
                        <div className="row">
                            <div className="col-md-12 pb-3">
                                <div className="form-floating">
                                    <input
                                        name="usuario"
                                        value={formUsuarioCliente.usuario}
                                        onChange={handleChange}
                                        type="text"
                                        className="form-control"
                                        placeholder="usuario"
                                    />
                                    <label htmlFor="usuario" className="form-label">
                                        Usuario
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-12 pb-3">
                                <div className="form-floating">
                                    <input
                                        name="password"
                                        value={formUsuarioCliente.password}
                                        onChange={handleChange}
                                        type="password"
                                        className="form-control"
                                        placeholder="descripcion"
                                    />
                                    <label htmlFor="password" className="form-label">
                                        Password
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
}

export default AgregarUsuarioCliente