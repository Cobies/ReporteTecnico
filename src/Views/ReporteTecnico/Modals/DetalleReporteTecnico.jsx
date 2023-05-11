import html2pdf from 'html2pdf.js';

function DetalleReporteTecnico() {

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
            <tr>
              <th scope="row">1</th>
              <td>PC- AIO</td>
              <td>Procesador core i3-1011ou 2.10Ghz RAM 8GB, Windows 10 pro SSD 256 HDD 1Tb Teclado hp Mouse Hp</td>
              <td>HP</td>
              <td>200G422</td>
              <td>Centro de Computo</td>
              <td>20/10/2022</td>
              <td>OPERATIVO</td>
              <td>Equipo con varios años de uso, requiere mantenimient, cambio de ventiladores.</td>
              <td className="text-center">
                <div className="d-flex justify-content-center gap-2 align-items-center">
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver</button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>PC- AIO</td>
              <td>Procesador core i3-1011ou 2.10Ghz RAM 8GB, Windows 10 pro SSD 256 HDD 1Tb Teclado hp Mouse Hp</td>
              <td>HP</td>
              <td>200G422</td>
              <td>Centro de Computo</td>
              <td>20/10/2022</td>
              <td>OPERATIVO</td>
              <td>Equipo con varios años de uso, requiere mantenimient, cambio de ventiladores.</td>
              <td className="text-center">
                <div className="d-flex justify-content-center gap-2 align-items-center">
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver</button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>PC- AIO</td>
              <td>Procesador core i3-1011ou 2.10Ghz RAM 8GB, Windows 10 pro SSD 256 HDD 1Tb Teclado hp Mouse Hp</td>
              <td>HP</td>
              <td>200G422</td>
              <td>Centro de Computo</td>
              <td>20/10/2022</td>
              <td>OPERATIVO</td>
              <td>Equipo con varios años de uso, requiere mantenimient, cambio de ventiladores.</td>
              <td className="text-center">
                <div className="d-flex justify-content-center gap-2 align-items-center">
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver</button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>PC- AIO</td>
              <td>Procesador core i3-1011ou 2.10Ghz RAM 8GB, Windows 10 pro SSD 256 HDD 1Tb Teclado hp Mouse Hp</td>
              <td>HP</td>
              <td>200G422</td>
              <td>Centro de Computo</td>
              <td>20/10/2022</td>
              <td>OPERATIVO</td>
              <td>Equipo con varios años de uso, requiere mantenimient, cambio de ventiladores.</td>
              <td className="text-center">
                <div className="d-flex justify-content-center gap-2 align-items-center">
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver</button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>PC- AIO</td>
              <td>Procesador core i3-1011ou 2.10Ghz RAM 8GB, Windows 10 pro SSD 256 HDD 1Tb Teclado hp Mouse Hp</td>
              <td>HP</td>
              <td>200G422</td>
              <td>Centro de Computo</td>
              <td>20/10/2022</td>
              {/* <td>WFBF691005L</td> */}
              <td>OPERATIVO</td>
              <td>Equipo con varios años de uso, requiere mantenimient, cambio de ventiladores.</td>
              <td className="text-center">
                <div className="d-flex justify-content-center gap-2 align-items-center">
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver</button>
                </div>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
      <button className="btn btn-primary" onClick={generatePDF}>
        Generar PDF
      </button>
      </div>
     

   {/* <!-- Modal --> */}
<div class="modal fade mt-5" id="exampleModal" tabindex="1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Detalles del Reporte</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
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
              <th scope="row">1</th>
              <td>PC- AIO</td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>PC- AIO</td>
            </tr>
            <tr>
              <th scope="row">13</th>
              <td>PC- AIO</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>PC- AIO</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>PC- AIO</td>
            </tr>
          </tbody>
        </table>
      </div>

      </div>
      <div class="modal-footer">
        {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
        {/* <button type="button" class="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>
   </div>

  
      </>
  


   );
}

export default DetalleReporteTecnico;