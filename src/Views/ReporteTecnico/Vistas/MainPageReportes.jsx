import { useEffect, useState } from 'react';
import CrearReporte from '../Forms/CrearReporte';
import ReporteTecnico from './ReporteTecnico';
import { GetAllReportes } from '../../../Services/ReporteVistaTecnico';

function MainPageReportes() {

  const [reporteVistaTecnico, setReporteVisitaTecnica] = useState([{}])

  useEffect(() => {
    fetchData();
  }, [])

  async function fetchData() {
    const data = await GetAllReportes()
    setReporteVisitaTecnica(data)
    console.log(reporteVistaTecnico)
  }

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <CrearReporte />
          </div>
          <div className='col-8'>
            {!reporteVistaTecnico ? (
              <ReporteTecnico reporteVistaTecnico={reporteVistaTecnico} />
            ) : (
              <h1>Loading</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPageReportes