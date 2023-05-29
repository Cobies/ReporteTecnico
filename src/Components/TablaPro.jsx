import { useState } from 'react';

function TablaPro() {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Columna 1</th>
                    <th>Columna 2</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Dato 1</td>
                    <td>Dato 2</td>
                    <td>
                        <button onClick={toggleDetails}>Mostrar Detalles</button>
                    </td>
                </tr>
                {showDetails && (
                    <tr>
                        <td colSpan="3">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Detalle 1</th>
                                        <th>Detalle 2</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Detalle 1.1</td>
                                        <td>Detalle 1.2</td>
                                    </tr>
                                    <tr>
                                        <td>Detalle 2.1</td>
                                        <td>Detalle 2.2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default TablaPro;
