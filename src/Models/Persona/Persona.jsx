import TipoDocumentoIdentidad from "../Helpers/TipoDocumentoIdentidad";
import Distrito from "../Ubicacion/Distrito";

const Persona = {
    _id: null,
    nombre: "",
    documentoIdentidad: "",
    tipoDocumentoIdentidad: TipoDocumentoIdentidad,
    brevette: "",
    telefono: "",
    email: "",
    direccion: "",
    ubigeo: "",
    genero: "",
    edad: "",
    distrito: Distrito
}

export default Persona;