import data from "../test.json"
import { useState } from 'react';
import html2pdf from 'html2pdf.js';
import ModalDetalleReporteTecnico from './../Modals/ModalDetalleReporteTecnico';

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
      <div className="container bg-reporte" style={{ marginTop: "5rem" }}>
      <div className="row pdfmodal" style={{ marginTop: "2rem" }}>
          <h3 className='text-center'>INVENTARIO DEL REPORTE</h3>
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
      </div>
      <ModalDetalleReporteTecnico productoSeleccionado={productoSeleccionado}></ModalDetalleReporteTecnico>
    </>
   );
}

export default DetalleReporteTecnico;