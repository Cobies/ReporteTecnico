import Linea from "../Logistica/Linea"
import Marca from "../Logistica/Marca"

const ProductoReporte = {
    _id: null,
    codigo: "",
    nombre: "",
    marca: Marca,
    linea: Linea,
    modelo: ""
}

export default ProductoReporte