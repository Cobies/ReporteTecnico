/* eslint-disable react/prop-types */
import axios from 'axios';
import { useEffect, useState } from 'react';

const SelectPro = ({ name, endpoint, nameExtractor }) => {
    const [showList, setShowList] = useState(false);
    const [selectedValue, setSelectedValue] = useState({ value: "", id: null, obj: "" });
    const [data, setData] = useState([{}])

    function handleSelection(value, id, obj) {
        setSelectedValue({ ...selectedValue, value: value, id: id, obj: obj })
        setShowList(false)
        // console.log(value, id, JSON.stringify(obj))
    }

    useEffect(() => {
        GetAll()
    }, [])

    return (
        <div className="form-floating">
            <input onClick={() => setShowList(!showList)} className="form-control" id='select' type="text" placeholder='Pedro' value={selectedValue.value} autoComplete='off' />
            <label htmlFor={"select"} className="form-label">
                {name}
            </label>
            {showList && (
                <ul className="list-group position-absolute" style={{ zIndex: 99999, width: 335 }} >
                    <input type='text' placeholder='Search' className='form-control' autoFocus></input>
                    {data ? data.map((x) => (<li key={x._id} onClick={() => handleSelection(nameExtractor(x), x._id, x)} className="list-group-item">{nameExtractor(x)}</li>)) : null}
                </ul>
            )}
            <input type="hidden" name={name} value={JSON.stringify(selectedValue.obj)} />
        </div>
    )

    async function GetAll() {
        const response = await axios.get(`https://localhost:7044${endpoint}`)
        setData(response.data)
    }
};

export default SelectPro;
