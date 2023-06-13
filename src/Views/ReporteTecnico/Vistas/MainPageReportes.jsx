/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { GetAllReportes } from '../../../Services/ReporteVistaTecnico'
import { Link } from 'react-router-dom'
import AgregarDetallesReporte from '../Modals/AgregarDetallesReporte'
import AgregarReporteVistaTecnica from '../Modals/AgregarReporteVistaTecnico'
import AgregarArticulosDetalles from '../Modals/AgregarArticulosDetalles'
import AgregarCliente from '../Modals/AgregarCliente'
import AgregarProducto from '../Modals/AgregarProducto'
import AgregarMarca from '../Modals/AgregarMarca'
import AgregarLinea from '../Modals/AgregarLinea'
import EditarArticulosDetalles from '../Modals/EditarArticulosDetalles'
import VerDetallesReporte from '../Modals/VerDetallesReporte'
import VerReporteVistaTecnico from '../Modals/VerReporteVistaTecnico'

function MainPageReportes({ session }) {
  const [reporteVistaTecnico, setReporteVisitaTecnica] = useState([
    {
      detalles: [],
    },
  ])
  const [detalles, setDetalles] = useState([])
  const [articulos, setArticulos] = useState([])
  const [loading, setLoading] = useState(null)
  const [formDetalles, setFormDetalles] = useState({
    observacion: '',
    area: '',
    Producto: {
      nombre: '',
      marca: '',
      linea: {},
      codigo: '',
      modelo: '',
    },
  })
  const [formReporteVistaTecnica, setFormReporteVistaTecnica] = useState({
    Activo: true,
    Sugerencia: '',
    Cliente: null,
  })
  const [capture, setCapture] = useState({
    index: 0,
    x: {
      Operativo: '',
      FechaCompra: null,
      Observaciones: '',
    },
  })
  const [verReporteVistaTecnico, setVerReporteVistaTecnico] = useState({})
  const [captureDetalles, setCaptureDetalles] = useState({})

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    // console.log(detalles)
  }, [detalles])

  async function fetchData() {
    setLoading(true)
    const data = await GetAllReportes()
    setReporteVisitaTecnica(data)
    setLoading(false)
  }

  // const style = StyleSheet({
  //   tabla: {
  //     background: "#00B2FF"
  //   }
  // })

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="container" style={{ marginTop: '1rem' }}>
            <h3 className="text-center mt-2 titulo fw-bold">
              Bienvenido, aqui estan tus Reportes Actuales
            </h3>
            <button
              className="Btn"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#AgregarReporteVistaTecnica"
            >
              <div className="sign">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-file-earmark-plus-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM8.5 7v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 1 0z" />
                </svg>
              </div>
              <div className="text">Crear Reporte</div>
            </button>

            <div
              className="table-responsive rounded"
              style={{ marginTop: '3rem' }}
            >
              <table
                className="table table-striped table-bordere"
                style={{ fontSize: 15 }}
              >
                <thead style={{ background: 'rgb(113,123,216)' }}>
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
                  {loading ? (
                    <tr>
                      <td className="text-center" colSpan={6}>
                        Loading
                      </td>
                    </tr>
                  ) : reporteVistaTecnico.length === 0 &&
                    Array.isArray(reporteVistaTecnico) ? (
                    <tr>
                      <td className="text-center" colSpan={6}>
                        No se encontraron resultados
                      </td>
                    </tr>
                  ) : (
                    reporteVistaTecnico.map(x => (
                      <tr key={x._id}>
                        <td>
                          {x.activo ? (
                            <i className="bi bi-check text-success"></i>
                          ) : (
                            <i className="bi bi-x-lg text-danger"></i>
                          )}
                        </td>
                        <td>{x.numero}</td>
                        <td>{x.empleado?.persona?.nombre}</td>
                        <td>{x.cliente?.persona?.nombre}</td>
                        {/* <td>{x.documentosPdf?.map((u, index) => <a href={u} key={index} target='_blank' rel='noreferrer'>{u}<br></br></a>)}</td> */}
                        <td>
                          <div className="d-flex justify-content-center gap-2 align-items-center">
                            <Link
                              className="btn btn-danger border  bi bi-file-pdf"
                              to={`https://pdf.grupoupgrade.com.pe/Reporte/ReporteVisitaTecnica/${x._id}`}
                              target="_blank"
                            ></Link>
                            <Link
                              className="btn btn-primary border border-0 bi bi bi-file-pdf"
                              to={`https://pdf.grupoupgrade.com.pe/Reporte/DetalleReporteVisitaTecnica/${x._id}`}
                              target="_blank"
                            ></Link>
                            {/* <button className="btn btn-danger border border-0">
                            <i className="bi bi-trash-fill"></i>
                          </button> */}
                            <button
                              data-bs-toggle="modal"
                              data-bs-target="#VerReporteVistaTecnico"
                              onClick={() => setVerReporteVistaTecnico(x)}
                              className="btn btn-primary border border-0"
                            >
                              <i className="bi bi-search"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <AgregarReporteVistaTecnica
        {...{
          setReporteVisitaTecnica,
          fetchData,
          session,
          detalles,
          setDetalles,
          setArticulos,
          setCaptureDetalles,
          formReporteVistaTecnica,
          setFormReporteVistaTecnica,
          reporteVistaTecnico,
        }}
      />
      <AgregarDetallesReporte
        {...{
          articulos,
          setCapture,
          detalles,
          setArticulos,
          setDetalles,
          reporteVistaTecnico,
          setReporteVisitaTecnica,
          formDetalles,
          setFormDetalles,
        }}
      />
      <AgregarArticulosDetalles
        {...{
          formReporteVistaTecnica,
          articulos,
          detalles,
          setArticulos,
          formDetalles,
        }}
      />
      <EditarArticulosDetalles
        {...{ capture, setCapture, articulos, setArticulos }}
      />
      <AgregarCliente />
      <AgregarProducto />
      <AgregarMarca />
      <AgregarLinea />

      <VerReporteVistaTecnico
        {...{ verReporteVistaTecnico, setCaptureDetalles }}
      />
      <VerDetallesReporte
        {...{ captureDetalles, setCaptureDetalles, setCapture }}
      />
    </>
  )
}

export default MainPageReportes
