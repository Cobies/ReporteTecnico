/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import DetalleReporteTecnico from "./DetalleReportetecnico";
import { useEffect } from "react";

function ReporteTecnico({ reporteVistaTecnico }) {

  useEffect(() => {
    console.log(reporteVistaTecnico)
  }, [reporteVistaTecnico])

  return (
    <>
      <div className="container" style={{ marginTop: "7rem" }}>
        <h3 className="text-dark fw-bold">Tus Reportes Actuales</h3>
        <div className="table-responsive" style={{ marginTop: "5rem" }}>
          <table
            className="table table-striped table-bordered"
            style={{ fontSize: "0.8rem" }}
          >
            <thead>
              <tr className="text-center">
                <th scope="col">CODIGO</th>
                <th scope="col">CLIENTE</th>
                <th scope="col">ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {reporteVistaTecnico.map(x => (<tr key={x._id}>
                <td>{x.numero}</td>
                <td>{x.cliente.persona.nombre}</td>
                <td>
                  <div className="d-flex justify-content-center gap-2 align-items-center">
                    <Link className="btn btn-primary border border-0 bi bi-search" to="/reportes/Detalles"></Link>
                    <Link className="btn btn-success border border-0 bi bi-pencil-fill" to="/reportes/AgregarDetalles"></Link>
                    <button className="btn btn-danger border border-0">
                      <i className="bi bi-trash-fill"></i>
                    </button>
                  </div>
                </td>
              </tr>))
              }
            </tbody>
          </table>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div className="modal fade" id="ModalDetalle" tabIndex={-1} aria-labelledby="ModalDetalleLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-body">
              <DetalleReporteTecnico />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReporteTecnico;

