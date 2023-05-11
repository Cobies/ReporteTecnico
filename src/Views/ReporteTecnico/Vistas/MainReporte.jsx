import html2pdf from 'html2pdf.js';
import DetalleReporteTecnico from '../Modals/DetalleReporteTecnico';
import FormReportes from './FormReporte';
import ReporteTecnico from './ReporteTecnico';

function MainReporte() {
  return ( 
    <>
    <div className='container'>
      <div className='row'>

        <div className='col-4'>
          <FormReportes></FormReportes>
        </div>
        <div className='col-8'>
          <ReporteTecnico></ReporteTecnico>
        </div>
      </div>
    </div>
    </>
   );
}

export default MainReporte;