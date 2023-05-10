import Sede from "../Sucursales/Sede";
import Persona from "./Persona";

const Cliente = {
    nombreUsuario: "",
    pass: "",
    fechaRegistro: new Date(),
    persona: Persona,
    nivel: 0,
    sede: Sede
}

export default Cliente;