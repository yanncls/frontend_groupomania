import BackgroundPic from "../assets/milkyway.jpeg";
import "../utils/style/Profil.scss";
import Header from "../components/Header/index";
import ProfileSvg from "../assets/photo-man.jpeg";
import { Link } from "react-router-dom";
import MyFeed from "../components/MyFeed/MyFeed";

function Profil() {
  return (
    <div className="Profil">
      <Header />
      <div className="header-profil">
        <div className="profil-background">
          <img src={BackgroundPic} alt="background" id="background-picture" />
        </div>
        <div className="profil-cropper">
          <img src={ProfileSvg} alt="ProfilPhoto" />
        </div>
      </div>
      <div className="info-profil">
        <h2>Mes informations personnelles</h2>
        <form action="info-profil-update">
          <ul>
            <li>
              Prénom:{" "}
              <input
                type="text"
                name="prenom"
                id="prenom"
                placeholder="Fabien"
              />
            </li>
            <li>
              Nom:{""}
              <input type="text" name="nom" id="nom" placeholder="Olicard" />
            </li>
            <li>
              Email:{" "}
              <input
                type="email"
                name="email"
                id="email"
                placeholder="monmail@mail.com"
              />
            </li>
            <li>
              Bio:{" "}
              <input
                type="text"
                name="bio"
                id="bio"
                placeholder="loren ipsum"
              />
            </li>
          </ul>
          <Link to="/dashboard">
            <button>Soumettre</button>
          </Link>
        </form>
      </div>
      <div className="Feed">
        <MyFeed />
      </div>
    </div>
  );
}

export default Profil;
