import { motion } from "framer-motion";
import "./Login.css";
import logo from "./Logo.svg"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

/* eslint-disable react/prop-types */
const Login = ({ session, setSession }) => {

  // const user = {
  //   username: "pedro",
  //   password: "123"
  // }

  useEffect(() => {
    setMessage("")
  }, [session.isLoggedIn])

  const [message, setMessage] = useState("")

  const handleLogin = async (e) => {

    try {
      e.preventDefault();
      const nombreUsuario = e.target.username.value;
      const password = e.target.password.value;
      const response = await fetch('https://api.grupoupgrade.com.pe/Autenticacion/Autenticacion', {
        method: 'POST',
        body: JSON.stringify({ nombreUsuario, password }),
        headers: { 'Content-Type': 'application/json' },
      })
      const data = await response.text();
      const perfil = jwtDecode(data)
      setSession({ username: perfil.nombreusuaio, isLoggedIn: true, id: perfil.identificador })
    } catch (error) {
      setMessage("Intruso Detectado")
      e.target.username.value = ""
      e.target.password.value = ""
    }
  }

  // async function checkData(data) {
  //   return data != 'false';
  // }

  const handleLogout = (event) => {
    event.preventDefault();
    // Aquí se haría la lógica para cerrar sesión y borrar la información de la sesión
    setSession({ username: '', isLoggedIn: false });
  }

  return (
    <>
      <motion.div className="fixed-top" initial={{ height: "100vh" }} animate={{
        background: "#00B2FF",
        width: "100vw",
        height: session.isLoggedIn ? "50px" : "100vh",
        zIndex: 9999

      }}>
        {session.isLoggedIn
          ? <div style={{ padding: "12px 0", fontSize: 17 }} className="container d-flex justify-content-between text-white position-relative">
            <Link to="/" style={{ color: "white", textDecoration: "none", cursor: "pointer" }}>Soporte Tecnico</Link>
            <div style={{ cursor: "pointer" }} >
              {/* <Link style={{ color: "white", textDecoration: "none" }} className="px-1" to="/admin">Test</Link>
              <Link style={{ color: "white", textDecoration: "none" }} className="px-1" to="/login">Login</Link>
              <Link style={{ color: "white", textDecoration: "none" }} className="px-1" to="/reportes">reportes</Link> */}
              <i onClick={handleLogout} style={{ marginRight: 25 }} className="bi bi-box-arrow-left text-danger p-1"> {session.username}</i>
            </div>
            {/* <button className="btn">
              <i onClick={handleLogout}  className="bi bi-box-arrow-left text-danger"></i>
            </button> */}
          </div>
          : <form
            className="form-login"
            onSubmit={handleLogin}
          >
            <img src={logo} style={{ width: 250, padding: 25 }} alt="Logo"></img>
            <h2 style={{ color: "white" }}>Soporte Técnico</h2>
            <div className="mb-6" style={{ margin: "auto" }}>
              <input
                className="psw input-login"
                id="floatingInput"
                type="text"
                name="username"
                placeholder="Usuario"
                required
                autoComplete="off"
              />
              <motion.span id="loading"
                initial={{ background: "linear-gradient(45deg , rgba(255, 255, 255,1),rgba(0, 178, 255,1),rgba(255, 255, 255,1))" }}
                animate={{ background: ["linear-gradient(45deg, rgba(255, 255, 255,1),rgba(255, 255, 255,1), rgba(0, 178, 255,1))", "linear-gradient(45deg ,rgba(255, 255, 255,1),rgba(0, 178, 255,1),rgba(255, 255, 255,1))", "linear-gradient(45deg ,rgba(0, 178, 255,1), rgba(255, 255, 255,1),rgba(255, 255, 255,1))"] }}
                exit={{ background: "" }}
                transition={{ repeat: Infinity, duration: 1, repeatType: "reverse", times: [0, 0.2, 1] }}></motion.span>
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
                initial={{ background: "linear-gradient(45deg , rgba(255, 255, 255,1),rgba(0, 178, 255,1),rgba(255, 255, 255,1))" }}
                animate={{ background: ["linear-gradient(45deg, rgba(255, 255, 255,1),rgba(255, 255, 255,1), rgba(0, 178, 255,1))", "linear-gradient(45deg ,rgba(255, 255, 255,1),rgba(0, 178, 255,1),rgba(255, 255, 255,1))", "linear-gradient(45deg ,rgba(0, 178, 255,1), rgba(255, 255, 255,1),rgba(255, 255, 255,1))"] }}
                exit={{ background: "" }}
                transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
              >
              </motion.span>
            </div>

            <motion.button
              animate={{
                border: "none",
                margin: "30px auto",
                background: "transparent",
                color: "white",
                padding: "0 100px",
              }}
              whileHover={{ border: "1px solid white !important" }}
            >
              Ingresar
            </motion.button>

            <p style={{ color: "#ffffff99" }}>Desarrolado por <strong>Consultancy</strong></p>
            <motion.span initial={{ color: "white" }} animate={{ color: "red", y: 20 }}>{message}</motion.span>
          </form>}

      </motion.div>
    </>
  );
};

export default Login
