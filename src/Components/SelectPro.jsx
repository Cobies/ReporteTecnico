/* eslint-disable react/prop-types */
import axios from 'axios';
import { useEffect, useState } from 'react';

const SelectPro = ({ name }) => {
    const [showList, setShowList] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const [data, setData] = useState([{}])

    function handleSelection(value) {
        setSelectedValue(value);
        setShowList(false);
    }

    useEffect(() => {
        GetAllCliente()
    }, [])

    return (
        <div className="form-floating">
            <input onClick={() => setShowList(!showList)} className="form-control" id='select' type="text" placeholder='Pedro' value={selectedValue} />
            <label htmlFor={"select"} className="form-label">
                {name}
            </label>
            {showList && (
                <ul className="list-group position-absolute" style={{ zIndex: 99999, width: 335 }} >
                    <input type='text' placeholder='Search' className='form-control' autoFocus></input>
                    {data.map((x) => (<li key={x._id} onClick={() => handleSelection('Valor 1')} className="list-group-item">{x._id}</li>))}
                    <li onClick={() => handleSelection('Valor 1')} className="list-group-item">
                        Hola
                    </li>
                    <li onClick={() => handleSelection('Valor 2')} className="list-group-item">
                        Hola
                    </li>
                </ul>
            )}
            <input type="hidden" name={name} />
        </div>
    )

    async function GetAllCliente() {
        const response = await axios.get("https://api.grupoupgrade.com.pe/Cliente/GetBusquedaClienteLimite/0&20")
        console.log(response)
        setData(response)
        console.log(data)
    }
};

export default SelectPro;
