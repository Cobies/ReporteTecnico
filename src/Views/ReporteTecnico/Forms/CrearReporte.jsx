
// import SelectFloat from '../../../Components/SelectFloat';
import AgregarCliente from './../../Clientes/Modals/AgregarCliente';
import { useEffect, useState } from 'react';
import SelectPro from '../../../Components/SelectPro';
// import ReporteVisitaTecnica from '../../../Models/ReporteTecnico/ReporteVisitaTecnica';

function CrearReporte() {

  // Crear Cliente
  const [cliente, setCliente] = useState([{}])
  const [clientesAgregados, setClientesAgregados] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setClientesAgregados([...clientesAgregados, cliente]);
    setCliente({ nombre: '', email: '', telefono: '' });
  }

  useEffect(() => {
    GetAllCliente()
  }, [])

  const ReporteSubmit = async (e) => {
    e.preventDefault();
    const DocumentosPdf = e.target.DocumentosPdf.value;
    const Sugerencia = e.target.Sugerencia.value;
    const Activo = e.target.Activo.checked;
    console.log(DocumentosPdf.split('\n'), Sugerencia, Activo)
    try {
      const response = await fetch('https://api.grupoupgrade.com.pe/ReporteVisitaTecnica/SetReporteVisitaTecnica', {
        method: 'POST',
        body: JSON.stringify({ _id: null, Activo: Activo, FechaCreado: new Date(), Sugerencia: "Sugerencia", DocumentosPdf: DocumentosPdf.split('\n') }),
        headers: { 'Content-Type': 'application/json' },
      })
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  async function GetAllCliente() {
    try {
      const response = await fetch('https://api.grupoupgrade.com.pe/Cliente/GetBusquedaClienteLimite/0&20')
      const data = await response.json()
      setCliente(data)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <form onSubmit={ReporteSubmit}>
        <div className="container" >
          <h3 className="fw-bold my-4">Crear Reporte</h3>
          <div className="row">
            <div className="col-12">
              <div className="form-check">
                <input className='form-check-input' type="checkbox"
                  id="checkbox"
                  name='Activo'
                />
                <label htmlFor="Activo" className="form-check-label" >Activo</label>
              </div>
              {/* <Select options={options} onMenuScrollToBottom={loadMoreOptions}
                isClearable
                isSearchable
                placeholder="Select an option" />

              <SelectSearch /> */}

              <SelectPro name={"Cliente"}></SelectPro>
              {/* <SelectPro name={"Empleado"}></SelectPro> */}
              <div className="form-floating">
                <input type="text" id='Sugerencia' className="form-control" name="Sugerencia" placeholder='Sugerencia' autoComplete='off' />
                <label htmlFor="Sugerencia" className="form-label" >Sugerencia</label>
              </div>
              <div className="form-floating">
                <textarea
                  className='form-control'
                  id='DocumentosPdf'
                  name="DocumentosPdf"
                  rows="4"
                  cols="100"
                  placeholder='DocumentosPdf'
                />
                <label htmlFor="DocumentosPdf" className="form-label">DocumentosPdf</label>
              </div>
              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-primary">Crear</button>
                <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#ModalAgregarCliente">Añadir Cliente</button>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* Modal */}
      <AgregarCliente onClick={handleSubmit} clientesAgregados={clientesAgregados} cliente={cliente} ></AgregarCliente>

    </>
  )


}

export default CrearReporte;