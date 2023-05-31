/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { GetAllReportes } from '../../../Services/ReporteVistaTecnico';
import { Link } from 'react-router-dom';
import AgregarDetallesReporte from '../Modals/AgregarDetallesReporte';
import AgregarReporteVistaTecnica from '../Modals/AgregarReporteVistaTecnico';
import AgregarArticulosDetalles from '../Modals/AgregarArticulosDetalles';
import AgregarCliente from '../Modals/AgregarCliente';
import AgregarProducto from '../Modals/AgregarProducto';
import AgregarMarca from '../Modals/AgregarMarca';
import AgregarLinea from '../Modals/AgregarLinea';

function MainPageReportes({ session }) {

  const [reporteVistaTecnico, setReporteVisitaTecnica] = useState([{
    detalles: []
  }])
  const [detalles, setDetalles] = useState([])
  const [articulos, setArticulos] = useState([])

  useEffect(() => {
    // console.log(reporteVistaTecnico)
  }, [reporteVistaTecnico])

  useEffect(() => {
    fetchData();
  }, [])

  async function fetchData() {
    const data = await GetAllReportes()
    setReporteVisitaTecnica(data)
  }

  // const style = StyleSheet({
  //   tabla: {
  //     background: "#00B2FF"
  //   }
  // })

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className="container" style={{ marginTop: "1rem" }}>
            <h3 className="text-center">Tus Reportes Actuales</h3>
            <button type="button" className="btn text-white" style={{ background: "#00B2FF" }} data-bs-toggle="modal" data-bs-target="#AgregarReporteVistaTecnica">Crear Reporte</button>
            <div className="table-responsive" style={{ marginTop: "5rem" }}>
              <table className="table table-striped table-bordered" style={{ fontSize: 15 }}>
                <thead style={{ background: "#00B2FF" }}>
                  <tr className="text-center text-white">
                    <th scope="col">ACTIVO</th>
                    <th scope="col">CODIGO</th>
                    <th scope="col">EMPLEADO</th>
                    <th scope="col">CLIENTE</th>
                    {/* <th scope="col">PDF</th> */}
                    <th scope="col">ACCIONES</th>
                  </tr>
                </thead>
                <tbody>
                  {reporteVistaTecnico.length === 0 ? <tr><td className='text-center' colSpan={6}>Loading</td> </tr> : reporteVistaTecnico.map((x) => (<tr key={x._id}>
                    <td>{x.activo ? <i className="bi bi-check text-success"></i> : <i className="bi bi-x-lg text-danger"></i>}</td>
                    <td>{x.numero}</td>
                    <td>{x.empleado?.persona?.nombre}</td>
                    <td>{x.cliente?.persona?.nombre}</td>
                    {/* <td>{x.documentosPdf?.map((u, index) => <a href={u} key={index} target='_blank' rel='noreferrer'>{u}<br></br></a>)}</td> */}
                    <td>
                      <div className="d-flex justify-content-center gap-2 align-items-center">
                        <Link className="btn btn-danger border  bi bi-file-pdf" to={`https://pdf.grupoupgrade.com.pe/Reporte/ReporteVisitaTecnica/${x._id}`} target='_blank'></Link>
                        {/* <Link className="btn btn-success border border-0 bi bi-pencil-fill" to="/reportes/AgregarDetalles"></Link>
                        <button className="btn btn-danger border border-0">
                          <i className="bi bi-trash-fill"></i>
                        </button> */}
                      </div>
                    </td>
                  </tr>))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <AgregarReporteVistaTecnica {...{
        setReporteVisitaTecnica,
        fetchData,
        session,
        detalles,
        setDetalles,
        setArticulos,
      }} />
      <AgregarDetallesReporte articulos={articulos} detalles={detalles} setArticulos={setArticulos} setDetalles={setDetalles} reporteVistaTecnico={reporteVistaTecnico} setReporteVisitaTecnica={setReporteVisitaTecnica} />
      <AgregarArticulosDetalles articulos={articulos} detalles={detalles} setArticulos={setArticulos} />
      <AgregarCliente />
      <AgregarProducto />
      <AgregarMarca />
      <AgregarLinea /> 
    </>
  );
}

export default MainPageReportes