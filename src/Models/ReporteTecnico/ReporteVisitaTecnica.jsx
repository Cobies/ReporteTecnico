import Cliente from "../Persona/Cliente"
import Empleado from "../Persona/Empleado"
import DetalleReporteVisitaTecnica from "./DetalleReporteVisitaTecnica"

const ReporteVisitaTecnica = {
    _id: null,
    numero: 0,
    fechaCreado: new Date(),
    cliente: Cliente,
    empleado: Empleado,
    detalle: [DetalleReporteVisitaTecnica],
    sugerencia: "",
    documentosPdf: ""
}

export default ReporteVisitaTecnica