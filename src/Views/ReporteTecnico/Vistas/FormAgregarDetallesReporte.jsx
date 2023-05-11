function FormAgregarDetallesReporte() {
  return ( 
    <>

      <div class="container" style={{ marginTop :"5rem" }}>
  <form>
    <div class="row">
      <div class="col-md-2">
        <div class="mb-3">
          <label for="cantidad" class="form-label">Cantidad</label>
          <input type="number" class="form-control" id="cantidad" placeholder="Ingrese la cantidad" required></input>
        </div>
        <div class="mb-3">
          <label for="producto" class="form-label">Producto</label>
          <input type="text" class="form-control" id="producto" placeholder="Ingrese el producto" required></input>
        </div>
        <div class="mb-3">
          <label for="descripcion" class="form-label">Descripción</label>
          <textarea class="form-control" id="descripcion" rows="3" placeholder="Ingrese la descripción"></textarea>
        </div>
        <div class="mb-3">
          <label for="marca" class="form-label">Marca</label>
          <input type="text" class="form-control" id="marca" placeholder="Ingrese la marca"></input>
        </div>
      </div>
      <div class="col-2">
        <div class="mb-3">
          <label for="modelo" class="form-label">Modelo</label>
          <input type="text" class="form-control" id="modelo" placeholder="Ingrese el modelo"></input>
        </div>
        <div class="mb-3">
          <label for="area" class="form-label">Área</label>
          <input type="text" class="form-control" id="area" placeholder="Ingrese el área"></input>
        </div>
        <div class="mb-3">
          <label for="fechaCompra" class="form-label">Fecha de compra</label>
          <input type="date" class="form-control" id="fechaCompra"></input>
        </div>
        <div class="mb-3">
          <label for="condicion" class="form-label">Condición</label>
          <select class="form-select" id="condicion">
            <option selected disabled>Seleccione una condición</option>
            <option value="nuevo">Nuevo</option>
            <option value="usado">Usado</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="observaciones" class="form-label">Observaciones</label>
          <textarea class="form-control" id="observaciones" rows="3" placeholder="Ingrese observaciones"></textarea>
        </div>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Agregar</button>
  </form>
</div>

    </>
   );
}

export default FormAgregarDetallesReporte;