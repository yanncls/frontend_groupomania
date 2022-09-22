import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../api/axios";
import logo from "../assets/logo/icon-left-font-monochrome-white.png";
import "../utils/style/Signup.scss";

function Signup() {
  // regex de validation
  const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const EMAIL_REGEX =
    /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;

    // URL 
  const SIGNUP_URL = "/api/auth/signup";

  // reference utilisateur
  const userRef = useRef();
  const errRef = useRef();

  // champs utilisateurs
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // cibler ce que l'user modifie en input
  useEffect(() => {
    userRef.current.focus();
  }, []);

  //  user check
  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  // email check
  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email]);

  // password check
  useEffect(() => {
    const result = PWD_REGEX.test(password);
    console.log(result);
    console.log(password);
    setValidPwd(result);
    const match = password === matchPwd;
    setValidMatch(match);
  }, [password, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, password, matchPwd]);

  // Si l'user hack le boutton desactivé
  const handleSubmit = async (e) => {
    e.preventDefault();

    const v1 = USER_REGEX.test(user);
    const v2 = EMAIL_REGEX.test(email);
    const v3 = PWD_REGEX.test(password);
    if (!v1 || !v2 || !v3) {
      setErrMsg("Requête invalide");
      return;
    }

    // envoyer les données au backend si le formulaire est valide
    try {
      const res = await axios.post(
        SIGNUP_URL,
        JSON.stringify({ user, email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );
      console.log(res.data);
      console.log(res.accesToken);
      console.log(JSON.stringify(res));
      setSuccess(true);
      //
    } catch (err) {
      if (!err?.res) {
        setErrMsg("Pas de réponse du serveur");
      } else if (err.res?.stutus === 409) {
        setErrMsg("Nom utlisateur déjà pris");
      } else {
        setErrMsg("Echec de la création de compte");
      }
      // pour les lecteurs d'écran un focus
      errRef.current.focus();
    }
  };

  return (
    // Si le compte à été crée, message puis proposition redirection au log
    <>
      {success ? (
        <div className="App">
          <div className="logo-container">
            <img src={logo} alt="logo" id="Logo" />
          </div>
          <div className="Container">
            <div className="Content">
              <h1>Votre compte à été crée avec succès</h1>
              <p>
                <Link to="/login" className="link-login">
                  Connectez vous{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="App">
          <div className="logo-container">
            <img src={logo} alt="logo" id="Logo" />
          </div>
          <div className="Container">
            <div className="Content">
              <h1>Bienvenue sur votre réseau social d'entreprise</h1>
              <p>Créez votre compte dès maintenant</p>
              <section>
                <p
                  ref={errRef}
                  className={errMsg ? "errmsg" : "offscreen"}
                  aria-live="assertive"
                >
                  {errMsg}
                </p>
              </section>
              <form action="signup" id="signup" onSubmit={handleSubmit}>
                {/* Username */}
                <div>
                  <input
                    type="text"
                    placeholder="Nom d'utilisateur"
                    name="username"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    required
                    onChange={(e) => setUser(e.target.value)}
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                  />
                  <span className={user ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={validName ? faCheck : faTimes} />
                  </span>
                </div>
                <p
                  id="uidnote"
                  className={
                    userFocus && user && !validName
                      ? "instructions"
                      : "offscreen"
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} /> <br />
                  4 à 24 caractères. <br />
                  Doit commencer par une lettre. <br />
                  Lettres, Chiffres, Underscrores et Caractères spéciaux
                  autorisés.
                </p>
                <br />

                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                    ref={userRef}
                    autoComplete="off"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={validEmail ? "false" : "true"}
                    aria-describedby="emailnote"
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                  />
                  <span className={email ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={validEmail ? faCheck : faTimes} />
                  </span>
                </div>
                <p
                  id="emailnote"
                  className={
                    emailFocus && email && !validEmail
                      ? "instructions"
                      : "offscreen"
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} /> <br />
                  L'email doit contenir 8 à 24 caractères. <br />
                  Doit être au format monmail@groupomania.com.
                </p>
                <br />

                {/* Password */}
                <div>
                  <input
                    type="password"
                    placeholder="Mot de passe"
                    name="password"
                    id="password"
                    required
                    onChange={(e) => setPwd(e.target.value)}
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                  />
                  <span className={password ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={validPwd ? faCheck : faTimes} />
                  </span>
                </div>
                <p
                  id="pwdnote"
                  className={
                    pwdFocus && password && !validPwd
                      ? "instructions"
                      : "offscreen"
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} /> <br />
                  8 à 24 caractères. <br />
                  Doit inclure une lettre majuscule, minuscule, un nombre et un
                  caractère spécial.
                </p>
                <br />
                {/* Password double check */}
                <div>
                  <input
                    type="password"
                    placeholder="Confirmer le mot de passe"
                    name="confirm_password"
                    id="confirm_password"
                    required
                    onChange={(e) => setMatchPwd(e.target.value)}
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                  />
                  <span className={matchPwd ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={validMatch ? faCheck : faTimes} />
                  </span>
                </div>
                <p
                  id="confirmnote"
                  className={
                    matchFocus && matchPwd && !validMatch
                      ? "instructions"
                      : "offscreen"
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} /> <br />
                  Doit correspondre avec le premier mot de passe.
                </p>
                <br />
                <button
                  className="signup-btn"
                  disabled={
                    !validName || !validPwd || !validMatch ? true : false
                  }
                >
                  Créer le compte
                </button>
              </form>
              <br />
              <Link to="/login" className="link-login">
                Vous disposez déjà d'un compte ?{" "}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Signup;
