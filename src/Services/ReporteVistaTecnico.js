import axios from "axios";

export async function GetAllReportes() {
  const response = await axios.get(
    "https://localhost:7044/ReporteVisitaTecnica/GetAllReporteVisitaTecnicaLimite/0"
  );
  return response.data;
}
