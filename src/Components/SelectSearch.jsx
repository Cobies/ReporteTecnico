import Select from 'react-select';
import axios from 'axios';

function SelectSearch() {
  const loadOptions = async (inputValue) => {
    try {
      const response = await axios.get(
        `https://api.grupoupgrade.com.pe/Cliente/GetBusquedaClienteLimite/0&${inputValue}`
      );
      const options = await response.data.map((option) => ({
        value: option._id,
        label: option.persona.nombre,
      }));
      console.log(options)
      return options;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  return (
    <Select
      loadOptions={loadOptions}
      isClearable
      isSearchable
      placeholder="Search..."
    />
  );
}

export default SelectSearch;