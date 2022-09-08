import BackgroundPic from "../assets/milkyway.jpeg";
import "../utils/style/Profil.scss";
import Header from "../components/Header/index";
import ProfileSvg from "../assets/photo-man.jpeg";
import { Link } from "react-router-dom";
import MyFeed from "../components/MyFeed/MyFeed";
import AccountInfo from "../components/AccountInfo/AccountInfo";

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
      <AccountInfo />
      <div className="Feed">
        <MyFeed />
      </div>
    </div>
  );
}

export default Profil;
