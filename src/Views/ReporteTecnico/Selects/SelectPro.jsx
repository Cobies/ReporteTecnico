/* eslint-disable react/prop-types */
import axios from 'axios'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const SelectPro = ({
  name,
  endpoint,
  nameExtractor,
  onCaptureObj,
  SP,
  modal = '',
  SM = false,
  id,
  initial,
  capture,
}) => {
  const [showList, setShowList] = useState(false)
  const [selectedValue, setSelectedValue] = useState({
    value: '',
    id: null,
    obj: '',
  })
  const [data, setData] = useState([{}])
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(null)

  function handleSelection(value, id, obj) {
    setSelectedValue({ ...selectedValue, value: value, id: id, obj: obj })
    setShowList(false)
    // console.log(value, id, JSON.stringify(obj))
    onCaptureObj(obj)
  }

  function handleSearchKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (searchQuery.trim() == '' && searchQuery != null) {
        GetAll(initial)
        return
      } else {
        GetAllForSearch(0, searchQuery.toUpperCase(), SP)
      }
    }
  }
  useEffect(() => {
    if (showList && !SM) {
      GetAll(initial)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showList])

  // useEffect(()=>{
  //   console.log(capture)
  // },[capture])

  useEffect(() => {
    GetAllForSearch(0, '20', SP, id)
  }, [id])

  return (
    <>
      <div className="form-floating position-relative">
        <input
          style={{ zIndex: 50 }}
          onClick={() => setShowList(!showList)}
          className="form-control"
          id="select"
          type="text"
          placeholder={name}
          value={capture?.nombre ? capture.nombre : selectedValue.value}
          autoComplete="off"
          disabled={!SP && !id && SM ? true : false}
        />
        {SM ? null : (
          <span
            style={{ background: '#00B2FF', borderRadius: 3 }}
            // onClick={() => console.log("xD")}
            className=" h-100 text-center text-white"
            type="button"
            data-bs-toggle="modal"
            data-bs-target={'#' + modal}
          >
            +
          </span>
        )}

        <label htmlFor={'select'} className="form-label">
          {name + ' *'}
        </label>
        {showList && (
          <ul
            className="list-group position-absolute"
            style={{
              zIndex: 99999,
              width: '100%',
              height: 200,
              overflow: 'auto',
            }}
          >
            {SM ? null : (
              <input
                type="text"
                placeholder="Buscar por Nombre"
                className="form-control"
                autoFocus
                onKeyDown={handleSearchKeyDown}
                onChange={e => setSearchQuery(e.target.value)}
              />
            )}

            {data.length === 0 && !loading ? (
              <li className="text-center bg-success text-white">
                No se encontraron datos
              </li>
            ) : loading ? (
              <li>
                <motion.h3
                  className="text-center"
                  style={{
                    background: 'white',
                    color: 'black',
                    padding: '10px',
                  }}
                >
                  <div className="spinner-border text-info" role="status"></div>
                </motion.h3>
              </li>
            ) : (
              data.map((x, index) => (
                <li
                  key={index}
                  onClick={() => handleSelection(nameExtractor(x), x._id, x)}
                  className="list-group-item"
                >
                  {nameExtractor(x)}
                </li>
              ))
            )}
          </ul>
        )}
        <input
          type="hidden"
          name={name}
          value={
            capture
              ? JSON.stringify(capture)
              : JSON.stringify(selectedValue.obj)
          }
        />
      </div>
    </>
  )

  async function GetAllForSearch(skip, search, SP, id) {
    setLoading(true)
    const response = await axios.get(
      `https://api.grupoupgrade.com.pe${endpoint}/${
        SP ? '' : id ? id : `${skip}&${search.toUpperCase()}`
      }`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      }
    )
    setData(response.data)
    setLoading(false)
  }

  async function GetAll(initial) {
    setLoading(true)
    const response = await axios.get(
      `https://api.grupoupgrade.com.pe${initial}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      }
    )
    setData(response.data)
    setLoading(false)
  }
}

export default SelectPro
