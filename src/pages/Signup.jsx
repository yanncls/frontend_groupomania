import "../utils/style/Signup.scss";
import logo from "../assets/logo/icon-left-font-monochrome-white.png";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="App">
      <div className="logo-container">
        <img src={logo} alt="logo" id="Logo" />
      </div>
      <div className="Container">
        <div className="Content">
          <h1>Bienvenue sur votre réseau social d'entreprise</h1>
          <p>Créez votre compte dès maintenant</p>
          <form action="signup" id="signup">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="nom"
              required
            />
            <br />
            <input
              type="text"
              name="surname"
              id="surname"
              placeholder="prénom"
              required
            />
            <br />
            <input
              type="email"
              name="register_mail"
              id="register_mail"
              placeholder="email"
              required
            />
            <br />
            <input
              type="password"
              name="register_password"
              id="register_password"
              placeholder="mot de passe"
              required
            />
            <br />
            <button className="signup-btn">Créer le compte</button>
          </form>
          <br />
          <Link to="/login" className="link-login">
            Vous disposez déjà d'un compte ?{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
