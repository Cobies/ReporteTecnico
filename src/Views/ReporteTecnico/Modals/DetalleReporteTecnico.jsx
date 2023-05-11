import html2pdf from 'html2pdf.js';
import data from "../test.json"
import React, { useState } from 'react';

function DetalleReporteTecnico() {

  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const generatePDF = () => {
    const element = document.querySelector('.pdfmodal');
    const options = {
      filename: 'ReporteTecnico.pdf',
      image: { type: 'jpeg', quality: 2 }, // Ajusta la calidad de las imágenes
      html2canvas: { scale: 2 }, // Aumenta la escala para una resolución más alta
      jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' } // Ajusta el tamaño de página y orientación
    };
    html2pdf().set(options).from(element).save();
  };

  return (

    <>
      <div className='container' style={{ marginTop: "5rem" }}>
        <div className="row pdfmodal" style={{ marginTop: "2rem" }}>
          <h3 className='text-center'>INVENTARIO DE HARDWARE</h3>
          <div className='table-responsive'>
            <table className="table table-sm table-striped table-bordered" style={{ fontSize: "0.8rem" }}>
              <thead>
                <tr className='text-center'>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Articulo</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">MARCA</th>
                  <th scope="col">MODELO</th>
                  <th scope="col">AREA</th>
                  <th scope="col">FECHA DE COMPRA</th>
                  <th scope="col">CONDICION</th>
                  <th scope="col">OBSERVACIONES</th>
                  <th scope="col">ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td scope="row">{item.Cantidad}</td>
                    <td>{item.Articulo}</td>
                    <td>{item.Descripcion}</td>
                    <td>{item.Marca}</td>
                    <td>{item.Modelo}</td>
                    <td>{item.Area}</td>
                    <td>{item.FechaCompra}</td>
                    <td>{item.Condicion}</td>
                    <td>{item.Observaciones}</td>
                    <td className="text-center">
                      <div className="d-flex justify-content-center gap-2 align-items-center">
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setProductoSeleccionado(item)}>Ver</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="btn btn-primary" onClick={generatePDF}>
            Generar PDF
          </button>
        </div>

        {/* <!-- Modal --> */}
        <div className="modal fade mt-5" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Detalles del Reporte</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {productoSeleccionado && (
                  <div className='table-responsive'>
                    <table className="table table-sm table-striped table-bordered" style={{ fontSize: "0.8rem" }}>
                      <thead>
                        <tr className='text-center'>
                          <th scope="col">Cantidad</th>
                          <th scope="col">Articulo</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">{productoSeleccionado.Cantidad}</th>
                          <td>{productoSeleccionado.Articulo}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
              <div className="modal-footer">
                {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                {/* <button type="button" className="btn btn-primary">Save changes</button> */}
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default DetalleReporteTecnico;