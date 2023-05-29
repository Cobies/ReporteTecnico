/* eslint-disable react/prop-types */
import axios from 'axios';
import { useEffect, useState } from 'react';

const SelectPro = ({ name, endpoint, nameExtractor, onCaptureObj, SP }) => {
    const [showList, setShowList] = useState(false);
    const [selectedValue, setSelectedValue] = useState({ value: "", id: null, obj: "" });
    const [data, setData] = useState([{}])
    const [searchQuery, setSearchQuery] = useState('');

    function handleSelection(value, id, obj) {
        setSelectedValue({ ...selectedValue, value: value, id: id, obj: obj })
        setShowList(false)
        // console.log(value, id, JSON.stringify(obj))
        onCaptureObj(obj);
    }

    function handleSearchKeyDown(e) {
        if (e.key === 'Enter') {
            e.preventDefault()
            GetAll(0, searchQuery, SP);
        }
    }
    useEffect(() => {
        GetAll(0, "20", SP)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="form-floating">
            <input onClick={() => setShowList(!showList)} className="form-control" id='select' type="text" placeholder='Pedro' value={selectedValue.value} autoComplete='off' />
            <label htmlFor={"select"} className="form-label">
                {name}
            </label>
            {showList && (
                <ul className="list-group position-absolute" style={{ zIndex: 99999, width: 335, height: 200, overflow: 'scroll' }}>
                    <input
                        type="text"
                        placeholder="Search"
                        className="form-control"
                        autoFocus
                        onKeyDown={handleSearchKeyDown}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {data ? (
                        data.map((x) => (
                            <li key={x._id} onClick={() => handleSelection(nameExtractor(x), x._id, x)} className="list-group-item">
                                {nameExtractor(x)}
                            </li>
                        ))
                    ) : (
                        <li>No se encontro datos</li>
                    )}
                </ul>
            )}
            <input type="hidden" name={name} value={JSON.stringify(selectedValue.obj)} />
        </div>
    )

    async function GetAll(skip, search, SP) {
        const response = await axios.get(`https://localhost:7044${endpoint}/${SP ? "" : skip + "&" + search}`)
        setData(response.data)
    }
}

export default SelectPro;
