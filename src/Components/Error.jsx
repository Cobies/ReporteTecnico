import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="fs-3"> <span className="text-primary">Opps!</span> Página no encontrada.</p>
        <p className="lead">
          La página que buscas no existe.
        </p>
        <Link to={"/"} className="btn btn-primary">Regresar a pagina principal</Link>
      </div>
    </div>
  )
}

export default Error