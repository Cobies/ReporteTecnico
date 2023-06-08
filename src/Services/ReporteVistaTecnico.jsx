import axios from 'axios'

const url = 'https://localhost:7044'
// const url = "https://api.grupoupgrade.com.pe"

const Options = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  },
}

//AUTHO
export async function Authorization(body) {
  delete Options.headers.Authorization
  const response = await axios.post(
    `${url}/Autenticacion/AutenticacionClienteYEmpleado`,
    body,
    Options
  )
  return response.data
}

// GET
export async function GetDNI(numero) {
  const response = await axios.get(
    `${url}/Cliente/ObtenerDNI/${numero}`,
    Options
  )
  return response.data
}

export async function GetAll(initial) {
  const response = await axios.get(`${url}${initial}`, Options)
  return response.data
}

export async function GetSelects(endpoint, SP, id, skip, search) {
  const response = await axios.get(
    `${url}${endpoint}/${
      SP ? '' : id ? id : `${skip}&${search.toUpperCase()}`
    }`,
    Options
  )
  return response.data
}

export async function GetAllReportes() {
  const response = await axios.get(
    `${url}/ReporteVisitaTecnica/GetAllReporteVisitaTecnicaLimite/0`,
    Options
  )
  return response.data
}

export async function GetEmpleadoId(id) {
  const response = await axios.get(
    `${url}/Empleado/GetEmpleadoId/${id}`,
    Options
  )
  return response.data
}

// POST
export async function PostDetalles(body) {
  const response = await axios.post(
    `${url}/DetalleReporteVisitaTecnica/SetDetalleReporteVisitaTecnica`,
    body,
    Options
  )
  return response.data
}

export async function PostReporteVistaTecnica(body) {
  const response = await axios.post(
    `${url}/ReporteVisitaTecnica/SetReporteVisitaTecnica`,
    body,
    Options
  )
  return response.data
}

export async function PostLinea(body) {
  const response = await axios.post(`${url}/Linea/SetLinea`, body, Options)
  return response.data
}

export async function PostMarca(body) {
  const response = await axios.post(`${url}/Marca/SetMarca`, body, Options)
  return response.data
}

export async function PostProductoReporte(body) {
  const response = await axios.post(
    `${url}/ProductoReporte/SetProductoReporte`,
    body,
    Options
  )
  return response.data
}

export async function PostDetalleReporteVisitaTecnica(body) {
  const response = await axios.post(
    `${url}/DetalleReporteVisitaTecnica/SetDetalleReporteVisitaTecnica`,
    body,
    Options
  )
  return response.data
}

export async function PostUsuarioClienteReporteTecnico(body) {
  const response = await axios.post(
    `${url}/UsuarioClienteReporteTecnico/SetUsuarioClienteReporteTecnico`,
    body,
    Options
  )
  return response.data
}

export async function PostPersona(body) {
  const response = await axios.post(`${url}/Persona/SetPersona`, body, Options)
  return response.data
}

export async function PostCliente(body) {
  const response = await axios.post(`${url}/Cliente/SetCliente`, body, Options)
  return response.data
}
