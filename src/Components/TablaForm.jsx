function TableForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar las acciones necesarias con los datos del formulario
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Columna 1</th>
          <th>Columna 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Dato 1</td>
          <td>Dato 2</td>
        </tr>
        <tr>
          <td colSpan="2">
            <form onSubmit={handleSubmit}>
              <input type="text" name="campo1" placeholder="Campo 1" />
              <input type="text" name="campo2" placeholder="Campo 2" />
              <button type="submit">Enviar</button>
            </form>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default TableForm;
