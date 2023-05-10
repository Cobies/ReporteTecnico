import { motion } from "framer-motion";
import "./Login.css";
import logo from "./Logo.svg"

/* eslint-disable react/prop-types */
const Login = ({ session, setSession }) => {

  const user = {
    username: "pedro",
    password: "123"
  }

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
      console.error("Credenciales Invalidas")
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
    <div >
      {
        session.isLoggedIn ?
          <div>
            <p>Bienvenido {session.username}!</p>
            <button onClick={handleLogout}>Cerrar sesión</button>
          </div>
          :
          <div>
            <form
              onSubmit={handleLogin}
              style={{
                background: "#00B2FF",
                height: "100vh",
                width: "100vw",
              }}
            >
              <img src={logo} style={{ width: 250, padding: 25 }} alt="Logo"></img>
              <h2 style={{ color: "white" }}>Soporte Técnico</h2>
              <div className="mb-6" style={{ margin: "auto" }}>
                <input
                  className="psw"
                  id="floatingInput"
                  type="text"
                  name="username"
                  placeholder="Usuario"
                />
                <motion.span id="loading"
                  initial={{ background: "linear-gradient(45deg , rgba(255, 255, 255,1),rgba(0, 178, 255,1),rgba(255, 255, 255,1))" }}
                  animate={{ background: ["linear-gradient(45deg, rgba(255, 255, 255,1),rgba(255, 255, 255,1), rgba(0, 178, 255,1))", "linear-gradient(45deg ,rgba(255, 255, 255,1),rgba(0, 178, 255,1),rgba(255, 255, 255,1))", "linear-gradient(45deg ,rgba(0, 178, 255,1), rgba(255, 255, 255,1),rgba(255, 255, 255,1))"] }}
                  exit={{ background: "" }}

                  transition={{ repeat: Infinity, duration: 1, repeatType: "reverse", times: [0, 0.2, 1] }}></motion.span>
              </div>
              <div className="mb-6">
                <input
                  className="psw"
                  type="password"
                  name="password"
                  placeholder="Contraseña"

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
            </form>
          </div>
      }
    </div>
  );
};

export default Login
