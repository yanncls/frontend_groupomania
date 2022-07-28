import "../utils/style/Login.scss";
import logo from "../assets/logo/icon-left-font-monochrome-white.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="App">
      <div className="logo-container">
        <img src={logo} alt="logo" id="Logo" />
      </div>
      <div className="Container__Log">
        <div className="Content">
          <h1>Bienvenue sur votre réseau social d'entreprise</h1>
          <p>Vous disposez déjà d'un compte ?</p>
          <form action="login">
            <input type="email" id="loggin_mail" placeholder="email" />
            <br />
            <input
              type="password"
              name="loggin_password"
              id="loggin_password"
              placeholder="mot de passe"
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
  );
}

export default Login;
