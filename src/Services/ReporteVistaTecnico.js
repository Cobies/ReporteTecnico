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
  console.log(response)
  return response.data;
}
