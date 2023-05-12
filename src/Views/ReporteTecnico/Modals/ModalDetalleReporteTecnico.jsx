import React, { useState } from 'react';

function ModalDetalleReporteTecnico({productoSeleccionado}) {
 
  return (

    <>
      <div className='container' style={{ marginTop: "5rem" }}>
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

export default ModalDetalleReporteTecnico;