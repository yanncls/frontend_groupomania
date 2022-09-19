import "../utils/style/Login.scss";
import logo from "../assets/logo/icon-left-font-monochrome-white.png";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "../api/axios";

const LOGIN_URL = "/api/auth/login";

function Login() {
  const userRef = useRef();
  const errRef = useRef();

  // states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [auth, setAuth] = useState({});

  useEffect(() => {
    if (auth.token) {
      localStorage.setItem("userId", auth.userId);
      localStorage.setItem("token", auth.token);
      axios.defaults.headers["authorization"] = `Bearer ${auth.token}`;
    }
  }, [auth]);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios(LOGIN_URL, {
        method: "post",
        data: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      console.log(JSON.stringify(res));
      const token = res?.token;
      const userId = res?.userId;
      setAuth({ userId, token });
      setSuccess(true);
    } catch (err) {
      if (!err?.res) {
        setErrMsg("Pas de réponse du serveur");
      } else if (err.res?.status === 400) {
        setErrMsg("L'utilisateur et/ou le mot de passe est faux");
      } else if (err.res?.status === 401) {
        setErrMsg("Pas d'autorisation");
      } else {
        setErrMsg("Erreur de connexion");
      }
      err.Ref.current.focus();
    }
  };

  if (auth.token) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
      {success ? (
        <div className="App">
          <div className="logo-container">
            <img src={logo} alt="logo" id="Logo" />
          </div>
          <div className="Container__Log">
            <div className="Content">
              <h1>Vous êtes connecté !</h1>
              <br />
              <Link to="/dashboard" className="link-login">
                Aller à l'acceuil
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="App">
          <div className="logo-container">
            <img src={logo} alt="logo" id="Logo" />
          </div>
          <div className="Container__Log">
            <div className="Content">
              <h1>Bienvenue sur votre réseau social d'entreprise</h1>
              <p>Vous disposez déjà d'un compte ?</p>
              <form action="login" onSubmit={handleSubmit}>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  ref={userRef}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
                <br />
                <input
                  type="password"
                  id="password"
                  placeholder="Mot de passe"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                <br />
                <button className="login-btn">Se connecter</button>
              </form>
              <br />
              <Link to="/signup" className="link-login">
                Créer un compte
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
