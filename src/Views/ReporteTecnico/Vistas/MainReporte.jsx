import html2pdf from 'html2pdf.js';
import DetalleReporteTecnico from '../Modals/DetalleReporteTecnico';
import FormReportes from './FormReporte';
import ReporteTecnico from './ReporteTecnico';

function MainReporte() {
  return ( 
    <>
    <div className='container'>
      <FormReportes></FormReportes>
      <ReporteTecnico></ReporteTecnico>
    </div>
    </>
   );
}

export default MainReporte;