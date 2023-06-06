import { useEffect, useState } from "react";
import SelectPro from "../Selects/SelectPro";
import { PostProductoReporte } from "../../../Services/ReporteVistaTecnico";

const AgregarProducto = () => {
  const [formProducto, setFormProducto] = useState({ nombre: "", modelo: "" })
  const [message, setMessage] = useState("")

  useEffect(() => {
    // console.log(formProducto)
  }, [formProducto])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue =
      type === "checkbox" ? checked : type === "date" ? new Date(value) : value;
    setFormProducto((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
  };

  function generarCodigo(nombreProducto, abreviaturaMarca, linea) {
    // Dividir el nombre del producto en palabras
    const palabras = nombreProducto.split(' ');

    // Obtener la primera letra de cada palabra
    const letras = palabras.map(palabra => palabra.charAt(0));

    // Unir las letras, la abreviatura de la marca y la línea
    const codigo = letras.join('') + abreviaturaMarca + linea;

    return codigo;
  }

  async function postProducto(e) {
    e.preventDefault()
    if (!formProducto.nombre || !formProducto.modelo || !formProducto.marca || !formProducto.linea) {
      setMessage("Completa los campos que falta")
    } else {
      const body = {
        codigo: generarCodigo(formProducto.nombre, formProducto.marca?.abreviatura, formProducto.linea?.nombre),
        nombre: formProducto.nombre.toUpperCase(),
        marca: formProducto.marca,
        linea: formProducto.linea,
        modelo: formProducto.modelo.toUpperCase()
      }

      console.log(await PostProductoReporte(body))
      setFormProducto({ ...formProducto, nombre: "", modelo: "" })
      setMessage("")
    }

  }

  return (
    <div
      style={{ paddingTop: "15%" }}
      className="modal fade"
      id="AgregarProducto"
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
            <h5 className="modal-title">Agregar Producto</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={postProducto}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      autoComplete="off"
                      name="nombre"
                      value={formProducto.nombre.toUpperCase()}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      placeholder="nombre"
                    />
                    <label htmlFor="nombre" className="form-label">
                      Nombre *
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      autoComplete="off"
                      name="modelo"
                      value={formProducto.modelo.toUpperCase()}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      placeholder="modelo"
                    />
                    <label htmlFor="modelo" className="form-label">
                      Modelo *
                    </label>
                  </div>
                </div>
                <div className="col-md-6 py-3">
                  <SelectPro
                    name={"Marca"}
                    onCaptureObj={(x) => setFormProducto({ ...formProducto, marca: x })}
                    nameExtractor={(x) => x.nombre}
                    endpoint={"/Marca/GetBusquedaMarcaLimite"}
                    SP={false}
                    modal="AgregarMarca"
                    initial={"/Marca/GetAllMarcaLimite/0"}
                  />
                </div>
                <div className="col-md-6 py-3">
                  <SelectPro
                    name={"Linea"}
                    onCaptureObj={(x) => setFormProducto({ ...formProducto, linea: x })}
                    nameExtractor={(x) => x.nombre}
                    endpoint={"/Linea/GetBusquedaLineaLimite"}
                    SP={false}
                    modal="AgregarLinea"
                    initial={"/Linea/GetAllLineaLimite/0"}
                  />
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
                  Crear Producto
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgregarProducto;
