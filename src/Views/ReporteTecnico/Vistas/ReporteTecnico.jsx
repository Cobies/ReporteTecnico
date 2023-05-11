import { Link } from 'react-router-dom';
import DetalleReporteTecnico from './../Modals/DetalleReporteTecnico';

function ReporteTecnico() {

  return ( 
        <>
        <div className="container" style={{ marginTop: "2rem" }}>
       <div className='table-responsive'>
        <table class="table table-striped table-bordered"
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
                            <Link className='btn btn-primary border border-0 bi bi-search' to="/reportes/Detalles"></Link>
                            {/* <button className="btn btn-primary border border-0" data-bs-toggle="modal" data-bs-target="#ModalDetalle"><i className="bi bi-search"></i></button> */}
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
<div class="modal fade" id="ModalDetalle" tabindex="-1" aria-labelledby="ModalDetalleLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      {/* <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div> */}
      <div class="modal-body">
      <DetalleReporteTecnico></DetalleReporteTecnico>
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
      {/* <th scope="col">ACCIONES</th> */}
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><input type="text" className="form-control" value="1" /></th>
      <td><input type="text" className="form-control" value="PC- AIO" /></td>
      <td><input type="text" className="form-control" value="Procesador core i3-1011ou 2.10Ghz RAM 8GB, Windows 10 pro SSD 256 HDD 1Tb Teclado hp Mouse Hp" /></td>
      <td><input type="text" className="form-control" value="HP" /></td>
      <td><input type="text" className="form-control" value="200G422" /></td>
      <td><input type="text" className="form-control" value="Centro de Computo" /></td>
      <td><input type="text" className="form-control" value="20/10/2022" /></td>
      <td><input type="text" className="form-control" value="OPERATIVO" /></td>
      <td><input type="text" className="form-control" value="Equipo con varios años de uso, requiere mantenimient, cambio de ventiladores." /></td>
      {/* <td className="text-center">
        <div className="d-flex justify-content-center gap-2 align-items-center">
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver</button>
        </div>
      </td> */}
    </tr>
    <tr>
      <th scope="row"><input type="text" className="form-control" value="1" /></th>
      <td><input type="text" className="form-control" value="PC- AIO" /></td>
      <td><input type="text" className="form-control" value="Procesador core i3-1011ou 2.10Ghz RAM 8GB, Windows 10 pro SSD 256 HDD 1Tb Teclado hp Mouse Hp" /></td>
      <td><input type="text" className="form-control" value="HP" /></td>
      <td><input type="text" className="form-control" value="200G422" /></td>
      <td><input type="text" className="form-control" value="Centro de Computo" /></td>
      <td><input type="text" className="form-control" value="20/10/2022" /></td>
      <td><input type="text" className="form-control" value="OPERATIVO" /></td>
      <td><input type="text" className="form-control" value="Equipo con varios años de uso, requiere mantenimient, cambio de ventiladores." /></td>
      {/* <td className="text-center">
        <div className="d-flex justify-content-center gap-2 align-items-center">
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver</button>
        </div>
      </td> */}
    </tr>
    <tr>
      <th scope="row"><input type="text" className="form-control" value="1" /></th>
      <td><input type="text" className="form-control" value="PC- AIO" /></td>
      <td><input type="text" className="form-control" value="Procesador core i3-1011ou 2.10Ghz RAM 8GB, Windows 10 pro SSD 256 HDD 1Tb Teclado hp Mouse Hp" /></td>
      <td><input type="text" className="form-control" value="HP" /></td>
      <td><input type="text" className="form-control" value="200G422" /></td>
      <td><input type="text" className="form-control" value="Centro de Computo" /></td>
      <td><input type="text" className="form-control" value="20/10/2022" /></td>
      <td><input type="text" className="form-control" value="OPERATIVO" /></td>
      <td><input type="text" className="form-control" value="Equipo con varios años de uso, requiere mantenimient, cambio de ventiladores." /></td>
      {/* <td className="text-center">
        <div className="d-flex justify-content-center gap-2 align-items-center">
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver</button>
        </div>
      </td> */}
    </tr>
    {/* <!-- Resto de las filas --> */}
  </tbody>
</table>
      </div>
    </div>
  </div>
  
 </div>

    </>

  );
}

export default ReporteTecnico;