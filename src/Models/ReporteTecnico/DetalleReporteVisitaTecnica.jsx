import ProductoReporte from "./ProductoReporte";
import ArticuloReporte from "./ArticuloReporte"

const DetalleReporteVisitaTecnica = {
    _id: null,
    fechaCreado: new Date(),
    articulos: [ArticuloReporte],
    producto: ProductoReporte,
    area: "",
    observacion: ""
}

export default DetalleReporteVisitaTecnica;