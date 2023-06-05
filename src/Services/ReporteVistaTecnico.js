import axios from "axios";

export async function GetAllReportes() {
  const response = await axios.get(
    "https://api.grupoupgrade.com.pe/ReporteVisitaTecnica/GetAllReporteVisitaTecnicaLimite/0",
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
}

export async function PostDetalles(body) {
  const response = await axios.post(
    "https://api.grupoupgrade.com.pe/DetalleReporteVisitaTecnica/SetDetalleReporteVisitaTecnica",
    body,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
}
