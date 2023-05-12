import html2pdf from 'html2pdf.js';
import CrearReporte from '../Forms/CrearReporte';
import ReporteTecnico from './ReporteTecnico';

function MainPageReportes() {
  return ( 
    <>
    <div className='container'>
      <div className='row'>

        <div className='col-4'>
          <CrearReporte></CrearReporte>
        </div>
        <div className='col-8'>
          <ReporteTecnico></ReporteTecnico>
        </div>
      </div>
    </div>
    </>
   );
}

export default MainPageReportes;