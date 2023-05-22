/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import CrearReporte from '../Forms/CrearReporte';
import DetalleReporteTecnico from "./DetalleReportetecnico";
import { GetAllReportes } from '../../../Services/ReporteVistaTecnico';
import { Link } from 'react-router-dom';

function MainPageReportes() {

  const [reporteVistaTecnico, setReporteVisitaTecnica] = useState([{}])

  useEffect(() => {
    fetchData();
  }, [])

  async function fetchData() {
    const data = await GetAllReportes()
    setReporteVisitaTecnica(data)
    console.log(data)
  }

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <CrearReporte />
          </div>
          <div className='col-8'>
            <div className="container" style={{ marginTop: "7rem" }}>
              <h3 className="text-dark fw-bold">Tus Reportes Actuales</h3>
              <div className="table-responsive" style={{ marginTop: "5rem" }}>
                <table
                  className="table table-striped table-bordered"
                  style={{ fontSize: "0.8rem" }}
                >
                  <thead>
                    <tr className="text-center">
                      <th scope="col">ACTIVO</th>
                      <th scope="col">CODIGO</th>
                      <th scope="col">EMPLEADO</th>
                      <th scope="col">CLIENTE</th>
                      <th scope="col">PDF</th>
                      <th scope="col">ACCIONES</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reporteVistaTecnico.length === 0 ? <tr><td className='text-center' colSpan={3}>Loading</td> </tr> : reporteVistaTecnico.map(x => (<tr key={x._id}>
                      <td>{x.activo ? "activo" : "desactivo"}</td>
                      <td>{x.numero}</td>
                      <td>{x.empleado?.persona.nombre}</td>
                      <td>{x.cliente?.persona.nombre}</td>
                      <td>{x.documentosPdf?.map((u, index) => <a href={u} key={index} target='_blank' rel='noreferrer'>{u}<br></br></a>)}</td>
                      <td>
                        <div className="d-flex justify-content-center gap-2 align-items-center">
                          <Link className="btn btn-primary border border-0 bi bi-search" to="/reportes/Detalles"></Link>
                          <Link className="btn btn-success border border-0 bi bi-pencil-fill" to="/reportes/AgregarDetalles"></Link>
                          <button className="btn btn-danger border border-0">
                            <i className="bi bi-trash-fill"></i>
                          </button>
                        </div>
                      </td>
                    </tr>))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* <table className="table table-sm table-striped table-bordered" style={{ fontSize: "0.8rem" }}>
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
            </table> */}
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
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPageReportes