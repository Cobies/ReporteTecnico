<<<<<<< HEAD


function ReporteTecnico() {

  return ( 
        <>
    
=======
// import html2pdf from 'html2pdf.js';

function ReporteTecnico() {

  const UsuarioClienteReporteTecnico = {
    _id: "",
    fechaCreado: new Date(),
    cliente: Cliente
  }


  return (
    <>
      <div className="container">
        <div className='table-responsive'>
          <table className="table table-striped table-bordered"
          //  style={{ fontSize: "0.8rem" }}
          >
            <thead>
              <tr className='text-center'>
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
                    <button className="btn btn-primary border border-0" data-bs-toggle="modal" data-bs-target="#ModalDetalle"><i className="bi bi-search"></i></button>
                    <button className="btn btn-success border border-0" data-bs-toggle="modal" data-bs-target="#ModalEditar"><i className="bi bi-pencil-fill"></i></button>
                    <button className="btn btn-danger border border-0"><i className="bi bi-trash-fill"></i></button>
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
            {/* <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div> */}
            <div className="modal-body">
              {/* <Vista></Vista> */}
            </div>
          </div>
        </div>
      </div>

      {/* MODAL DE EDITAR */}
      <div className="modal fade" id="ModalEditar" tabIndex={-1} aria-labelledby="ModalEditarleLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              {/* <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> */}
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Editar datos del modal</p>
            </div>
          </div>
        </div>
      </div>
>>>>>>> 3b113fc6d0429a233225b394343e9aee37026a6f

    </>

  );
}

export default ReporteTecnico;