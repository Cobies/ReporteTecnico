import Cliente from "../Persona/Cliente";
import html2pdf from 'html2pdf.js';
import Vista from "./Vista";


const UsuarioClienteReporteTecnico = () => {
   
    const UsuarioClienteReporteTecnico = {
        _id: "",
        fechaCreado: new Date(),
        cliente: Cliente
    }

    return (
        <>
      <div className="container">
       <div className='table-responsive'>
        <table class="table table-striped table-bordered"
        //  style={{ fontSize: "0.8rem" }}
         >
            <thead>
            <tr className='text-center'>
                <th scope="col">CODIGO</th>
                <th scope="col">CLIENTE</th>
                <th scope="col">ACCIONES</th>
                {/* <th scope="col">MARCA</th>
                <th scope="col">MODELO</th>
                <th scope="col">AREA</th>
                <th scope="col">FECHA DE COMPRA</th>
                <th scope="col">N° SERIE</th>
                <th scope="col">CONDICION</th>
                <th scope="col">OBSERVACIONES</th> */}
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
                    {/* <td>HP</td>
                    <td>200G422</td>
                    <td>Centro de Computo</td>
                    <td>20/10/2022</td>
                    <td>WFBF691005L</td>
                    <td>OPERATIVO</td>
                    <td>Equipo con varios años de uso, requiere mantenimient, cambio de ventiladores.</td> */}
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    {/* <!-- Modal --> */}
<div class="modal fade" id="ModalDetalle" tabindex="-1" aria-labelledby="ModalDetalleLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <Vista></Vista>
      </div>
    </div>
  </div>
</div>

{/* MODAL DE EDITAR */}
<div class="modal fade" id="ModalEditar" tabindex="-1" aria-labelledby="ModalEditarleLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Editar datos del modal</p>
      </div>
    </div>
  </div>
</div>


    </>
    );
  };
  

export default UsuarioClienteReporteTecnico;