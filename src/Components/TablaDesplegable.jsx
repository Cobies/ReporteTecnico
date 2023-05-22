import { useState } from "react";

const TablaDesplegable = () => {
  const [filasDesplegadas, setFilasDesplegadas] = useState([]);

  const datos = [
    {
      nombre: "John",
      apellido: "Doe",
      edad: 35,
      pais: "EE. UU.",
      informacionAdicional:
        "Información adicional sobre John Doe. Puedes poner aquí cualquier información que quieras mostrar cuando se expanda la fila.",
    },
    {
      nombre: "Jane",
      apellido: "Doe",
      edad: 28,
      pais: "Canadá",
      informacionAdicional:
        "Información adicional sobre Jane Doe. Puedes poner aquí cualquier información que quieras mostrar cuando se expanda la fila.",
    },
  ];

  const toggleFilaDesplegable = (indice) => {
    if (filasDesplegadas.includes(indice)) {
      setFilasDesplegadas(filasDesplegadas.filter((i) => i !== indice));
    } else {
      setFilasDesplegadas([...filasDesplegadas, indice])
    }
  }

  return (
    <table className="table table-light">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Edad</th>
          <th>País</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((dato, indice) => (
          <>
            <tr key={indice}
              className="desplegable"
              onClick={() => toggleFilaDesplegable(indice)}
            >
              <td>{dato.nombre}</td>
              <td>{dato.apellido}</td>
              <td>{dato.edad}</td>
              <td>{dato.pais}</td>
            </tr>
            {filasDesplegadas.includes(indice) && (
              <tr className="contenido-desplegable">
                <td >contenido-desplegable</td>
                <td >contenido-desplegable</td>
                <td >contenido-desplegable</td>
                <td >contenido-desplegable</td>
              </tr>
            )}
          </>
        ))}
      </tbody>
    </table>
  );
}

export default TablaDesplegable