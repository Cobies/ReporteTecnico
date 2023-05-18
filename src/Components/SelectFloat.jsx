/* eslint-disable react/prop-types */
const SelectFloat = ({
  icon,
  type,
  name,
  isValid,
  initial,
  options,
  ...rest
}) => {
  return (
    <div className="form-floating">
      <select
        value={type}
        id={name}
        className={`form-control ${isValid ? "is-valid" : "is-invalid"}`}
        name={name}
        {...rest}
      >
        <option>{initial}</option>
        {options.map((options) => (
          <option key={options._id} value={options._id}>
            {options.persona.nombre}
          </option>
        ))}
      </select>
      <label htmlFor={name}>
        <i
          className={`${icon} ${isValid ? "text-success" : "text-danger"}`}
        ></i>{" "}
        {name}
      </label>
      <div className="valid-feedback text-center">Mission Respect</div>
      <div className="invalid-feedback text-center">
        Al parecer ya eres nuestro cliente
      </div>
    </div>
  );
};
export default SelectFloat;
