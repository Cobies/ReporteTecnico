/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AgregarArticulosDetalles = ({ articulos, setArticulos }) => {
    const ModalArticulos = useRef(null);

    const [formArticulos, setFormArticulos] = useState({
        fechaCompra: "",

    })

    const handleChange = (e) => {
        setFormArticulos({
            ...formArticulos,
            [e.target.name]: e.target.value,
        });
    }

    useEffect(() => {
        const handleModalClose = () => {
            // Lógica a ejecutar al cerrar el modal
            console.log("Modal cerrado");
            // Agrega aquí tu script personalizado al cerrar el modal
        };

        // Agrega un event listener al evento 'hidden.bs.modal'
        ModalArticulos.current.addEventListener(
            "hidden.bs.modal",
            handleModalClose
        );

        // Limpia el event listener cuando el componente se desmonte
        return () => {
            ModalArticulos.current.removeEventListener(
                "hidden.bs.modal",
                handleModalClose
            );
        };
    }, []);

    async function PostArticuloDetalle(e) {
        e.preventDefault();
        console.log(e);
        const fechaCompra = e.target.fechaCompra.value;
        const operativo = e.target.operativo.checked;
        const observaciones = e.target.observaciones.value;
        const serie = uuidv4().substring(0, 8);
        setArticulos([
            ...articulos,
            {
                FechaCreado: new Date(),
                Serie: serie,
                Operativo: operativo,
                Observaciones: observaciones,
                FechaCompra: fechaCompra,
            },
        ]);
    }

    return (
        <div
            ref={ModalArticulos}
            className="modal fade"
            id="AgregarArticulosDetalles"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
        >
            <div className="modal-dialog modal-dialog-scrollable modal-fullscreen p-5">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Agregar Articulos</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={PostArticuloDetalle}>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="mb-3">
                                        <label htmlFor="fechaCompra" className="form-label">
                                            Fecha Compra
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="fechaCompra"
                                            value={formArticulos.fechaCompra}
                                            onChange={handleChange}
                                            required
                                        ></input>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="mb-3">
                                        <div className="form-check form-switch">
                                            <input
                                                className="form-check-input"
                                                name="operativo"
                                                type="checkbox"
                                                role="switch"
                                                id="flexSwitchCheckDefault"
                                                defaultChecked={true}
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
                                <div className="col-md-3">
                                    <div className="mb-3">
                                        <label htmlFor="observacion" className="form-label">
                                            Observaciones
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="observaciones"
                                            name="observaciones"
                                            rows="3"
                                            placeholder="Ingrese observaciones"
                                        ></textarea>
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
                                <button type="submit" className="btn btn-success">
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
