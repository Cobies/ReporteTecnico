import { Link } from "react-router-dom";
import DetalleReporteTecnico from "./DetalleReportetecnico";

function ReporteTecnico() {
  return (
    <>
      <div className="container" style={{ marginTop: "7rem" }}>
        <h3 className="text-dark fw-bold">Tus Reportes Actuales</h3>
        <div className="table-responsive" style={{ marginTop: "5rem" }}>
          <table
            className="table table-striped table-bordered"
          //  style={{ fontSize: "0.8rem" }}
          >
            <thead>
              <tr className="text-center">
                <th scope="col">CODIGO</th>
                <th scope="col">CLIENTE</th>
                <th scope="col">ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">ATX-990</th>
                <td>Colegio Americano</td>
                <td className="text-center">
                  <div className="d-flex justify-content-center gap-2 align-items-center">
                    <Link className="btn btn-primary border border-0 bi bi-search" to="/reportes/Detalles"></Link>
                    {/* <button className="btn btn-primary border border-0" data-bs-toggle="modal" data-bs-target="#ModalDetalle"><i className="bi bi-search"></i></button> */}
                    <Link className="btn btn-success border border-0 bi bi-pencil-fill" to="/reportes/AgregarDetalles"></Link>
                    <button className="btn btn-danger border border-0">
                      <i className="bi bi-trash-fill"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div className="modal fade" id="ModalDetalle" tabIndex={-1} aria-labelledby="ModalDetalleLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-body">
              <DetalleReporteTecnico></DetalleReporteTecnico>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReporteTecnico;
