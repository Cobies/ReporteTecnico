import RolDeUsuario from "../Helpers/RolDeUsuario";
import Almacen from "../Sucursales/Almacen";
import Persona from "./Persona";

const Empleado = {
    _id: null,
    activo: true,
    nombreUsuario: "",
    pass: "",
    fechaRegistro: new Date(),
    rolDeUsuario: RolDeUsuario,
    nivel: 0,
    almacen: Almacen,
    emailCorporativo: "",
    persona: Persona
}

export default Empleado;