import { motion } from 'framer-motion'
import './Login.css'
import logo from './Logo.svg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode'
import { Authorization } from '../../Services/ReporteVistaTecnico'

/* eslint-disable react/prop-types */
const Login = ({ session, setSession }) => {
  useEffect(() => {
    setMessage('')
  }, [session.isLoggedIn])

  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(null)

  const handleLogin = async e => {
    try {
      e.preventDefault()
      const nombreUsuario = e.target.username.value
      const password = e.target.password.value
      setLoading(true)
      const data = await Authorization({ nombreUsuario, password })
      localStorage.setItem('token', data)
      const perfil = jwtDecode(data)
      setSession({
        username: perfil.nombreusuaio,
        isLoggedIn: true,
        id: perfil.identificador,
      })
      // setTimeout(() => {
      //   // Tu función a ejecutar después de que hayan pasado los segundos
      //   localStorage.removeItem('token')
      //   setSession({ username: '', isLoggedIn: false, id: null })
      // }, perfil.exp * 1000) // Multiplica por 1000 para convertir segundos en milisegundos

      setLoading(false)
    } catch (error) {
      setMessage('Intruso Detectado')
      e.target.username.value = ''
      e.target.password.value = ''
      setLoading(false)
    }
  }

  const handleLogout = e => {
    e.preventDefault()
    localStorage.removeItem('token')
    setSession({ username: '', isLoggedIn: false })
  }

  return (
    <>
      <motion.div
        className="fixed-top"
        initial={{ height: '100vh' }}
        animate={{
          background: 'rgb(14,21,46)',
          width: '100vw',
          height: session.isLoggedIn ? '60px' : '100vh',
          zIndex: 9999,
          borderBottom: '1px solid white',
        }}
      >
        {session.isLoggedIn ? (
          <div
            style={{ padding: '15px 0', fontSize: 17 }}
            className="container d-flex justify-content-between text-white position-relative"
          >
            <Link
              to="/"
              className="fw-bold fs-5"
              style={{
                color: 'white',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              Soporte Técnico
            </Link>

            <div className="dropdown">
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://img.freepik.com/vector-premium/icono-circulo-usuario-anonimo-ilustracion-vector-estilo-plano-sombra_520826-1931.jpg"
                  className="rounded-circle"
                  height={25}
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>

              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                {/* <li>
                  <a className="dropdown-item" href="#">Mis Reportes</a>
                </li> */}
                <li>
                  <a onClick={handleLogout} className="dropdown-item" href="#">
                    {/* <Link style={{ color: "white", textDecoration: "none" }} className="px-1" to="/admin">Test</Link> */}
                    <i className="bi bi-box-arrow-left fw-bold text-danger">
                      {' '}
                      Salir
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <form className="form-login" onSubmit={handleLogin}>
            <img
              src={logo}
              style={{ width: 250, padding: 25 }}
              alt="Logo"
            ></img>
            <h2 className="titulo" style={{ color: 'white' }}>
              SOPORTE TÉCNICO
            </h2>
            <div className="mb-6" style={{ margin: 'auto' }}>
              <input
                className="psw input-login"
                id="floatingInput"
                type="text"
                name="username"
                placeholder="Usuario"
                required
                autoComplete="off"
              />
              <motion.span
                id="loading"
                initial={{
                  background:
                    'linear-gradient(45deg , rgba(255, 255, 255,1),rgba(0, 178, 255,1),rgba(255, 255, 255,1))',
                }}
                animate={{
                  background: [
                    'linear-gradient(45deg, rgba(255, 255, 255,1),rgba(255, 255, 255,1), rgba(0, 178, 255,1))',
                    'linear-gradient(45deg ,rgba(255, 255, 255,1),rgba(0, 178, 255,1),rgba(255, 255, 255,1))',
                    'linear-gradient(45deg ,rgba(0, 178, 255,1), rgba(255, 255, 255,1),rgba(255, 255, 255,1))',
                  ],
                }}
                exit={{ background: '' }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  repeatType: 'reverse',
                  times: [0, 0.2, 1],
                }}
              ></motion.span>
            </div>
            <div className="mb-6">
              <input
                className="psw input-login"
                type="password"
                name="password"
                placeholder="Contraseña"
                autoComplete="off"
                required
              />
              <motion.span
                initial={{
                  background:
                    'linear-gradient(45deg , rgba(255, 255, 255,1),rgba(0, 178, 255,1),rgba(255, 255, 255,1))',
                }}
                animate={{
                  background: [
                    'linear-gradient(45deg, rgba(255, 255, 255,1),rgba(255, 255, 255,1), rgba(0, 178, 255,1))',
                    'linear-gradient(45deg ,rgba(255, 255, 255,1),rgba(0, 178, 255,1),rgba(255, 255, 255,1))',
                    'linear-gradient(45deg ,rgba(0, 178, 255,1), rgba(255, 255, 255,1),rgba(255, 255, 255,1))',
                  ],
                }}
                exit={{ background: '' }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  repeatType: 'reverse',
                }}
              ></motion.span>
            </div>

            <motion.button
              animate={{
                border: 'none',
                margin: '30px auto',
                background: 'transparent',
                color: 'white',
                padding: '0 100px',
              }}
              whileHover={{ border: '1px solid white !important' }}
            >
              Ingresar
            </motion.button>

            <p style={{ color: '#ffffff99' }}>
              Desarrolado por <strong>Consultancy</strong>
            </p>
            {loading ? (
              <motion.div
                className="spinner-border text-light "
                initial={{ opacity: 0, scale: 0 }}
                animate={{ margin: 20, opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.3 }}
                role="status"
              >
                {' '}
              </motion.div>
            ) : (
              <motion.span
                initial={{ color: 'white' }}
                animate={{ color: 'red', y: 20 }}
              >
                {message}
              </motion.span>
            )}
          </form>
        )}
      </motion.div>
    </>
  )
}

export default Login
