import Cliente from "../Persona/Cliente"
import Empleado from "../Persona/Empleado"

const ReporteVisitaTecnica = {
    _id: "",
    numero: 0,
    fechaCreado: new Date(),
    cliente: Cliente,
    empleado: Empleado,
    detalle: [],
    sugerencia: "",
    documentosPdf
}

export default ReporteVisitaTecnica