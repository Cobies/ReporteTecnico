
const Detalles = () => {
  return (
    <div>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalPrincipal">
        Abrir Modal Principal
      </button>

      <div className="modal fade" id="modalPrincipal" tabIndex={-1} role="dialog" aria-labelledby="modalPrincipalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalPrincipalLabel">Modal Principal</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Este es el contenido del modal principal.</p>
              <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#modalSecundario">
                Abrir Modal Secundario
              </button>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modalSecundario" tabIndex={-1} role="dialog" aria-labelledby="modalSecundarioLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalSecundarioLabel">Modal Secundario</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Este es el contenido del modal secundario.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalles
