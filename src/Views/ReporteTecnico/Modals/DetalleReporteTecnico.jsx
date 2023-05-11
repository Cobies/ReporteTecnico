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
    {/* <!-- Modal --> */}
   
        <div className="row pdfmodal" style={{ marginTop: "2rem" }}>
     <h3 className='text-center'>INVENTARIO DE HARDWARE</h3>
  <div className='col-4'>
      {/* <img src={{  }}></img> */}
  </div>
        {/* <div className="table-responsive d-flex justify-content-center">
          <table className="table table-striped table-sm w-50" style={{ fontSize: "0.8rem" }}>
            <tbody>
              <tr>
                <th scope="col">INFORMACIÓN DEL CLIENTE</th>
              </tr>
              <tr>
                <th scope="row">NOMBRE</th>
                <td>COLEGIO MONTESSORI</td>
              </tr>
              <tr>
                <th scope="row">DIRECCIÓN</th>
                <td>Av. Jose Olaya N° 513, Cerro Colorado</td>
              </tr>
              <tr>
                <th scope="row">CIUDAD</th>
                <td>AREQUIPA</td>
              </tr>
            
              <tr>
                <th scope="row">TELÉFONO</th>
                <td>900151546</td>
              </tr>
              <tr>
                <th scope="row">FECHA</th>
                <td>25/04/2023</td>
              </tr>
              <tr>
                <th scope="row">RESPONSBALE</th>
                <td>30 años</td>
              </tr>
            </tbody>
          </table>
        </div> */}
  
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
              {/* <th scope="col">N° SERIE</th> */}
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
              {/* <td>WFBF691005L</td> */}
              <td>OPERATIVO</td>
              <td>Equipo con varios años de uso, requiere mantenimient, cambio de ventiladores.</td>
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
                            <button className="btn btn-primary border border-0" data-bs-toggle="modal" data-bs-target="#ModalDetalleArticulos"><i className="bi bi-search"></i></button>
                            {/* <button className="btn btn-success border border-0" data-bs-toggle="modal" data-bs-target="#ModalEditar"><i className="bi bi-pencil-fill"></i></button> */}
                              {/* <button className="btn btn-danger border border-0"><i className="bi bi-trash-fill"></i></button> */}
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
     
  {/* MODALES */}
  <div className="modal fade" id="ModalDetalleArticulos" tabindex="-1" aria-labelledby="ModalDetalleArticulosLabel" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>                
        <div className="modal-body">
        <div>
          <p>Hola soy yo</p>
        </div>
        </div>
      </div>
    </div>
  </div>
  
      </>
  


   );
}

export default DetalleReporteTecnico;