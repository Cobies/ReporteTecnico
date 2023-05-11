import { motion } from "framer-motion";
import "./Login.css";
import logo from "./Logo.svg"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const Login = ({ session, setSession }) => {

  const user = {
    username: "pedro",
    password: "123"
  }

  useEffect(() => {
    setMessage("")
  }, [session.isLoggedIn])

  const [message, setMessage] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    // const response = await fetch('https://ejemplo.com/api/login', {
    //   method: 'POST',
    //   body: JSON.stringify({ username, password }),
    //   headers: { 'Content-Type': 'application/json' },
    // })
    // const data = await response.json();

    if (user.username === username && user.password === password) {
      // setSession({ username: data.username, isLoggedIn: true });
      setSession({ username: user.username, isLoggedIn: true })
    } else {
      setMessage("Credenciales Invalidas")
      e.target.username.value = ""
      e.target.password.value = ""
    }

  }

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
            <Link className="navbar-brand" to="/" style={{ paddingLeft: 25 }}>Soporte Tecnico</Link>
            <div className="">
              <Link className="navbar-brand px-1" to="/admin">Test</Link>
              <Link className="navbar-brand px-1" to="/login">Login</Link>
              <Link className="navbar-brand px-1" to="/reportes">reportes</Link>
              <i onClick={handleLogout} style={{marginRight:25}} className="bi bi-box-arrow-left text-danger p-1"> {session.username}</i>
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

            <p style={{ color: "#ffffff99" }}>Desarrolado por <strong>Consultancy</strong> </p>
            <motion.span initial={{ color: "white" }} animate={{ color: "red", y: 20 }}>{message}</motion.span>
          </form>}

      </motion.div>
    </>
  );
};

export default Login
