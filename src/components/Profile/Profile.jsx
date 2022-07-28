import "./Profile.scss";
import ProfileSvg from "./photo-man.jpeg";
import BackgroundJpeg from "./milkyway.jpeg";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <div className="background">
        <img src={BackgroundJpeg} alt="backgroundpng" id="background-img" />
        <div className="image-cropper-top">
          <img src={ProfileSvg} alt="profilepng" className="profile-pic" />
        </div>
      </div>
      <div className="attribut">
        <h3>Nom et prénom</h3>
        <h4>Bio</h4>
      </div>
      <div className="my-profile">
        <Link to="/Profil" style={{ padding: "10px" }}>
          Mon profile
        </Link>
      </div>
    </div>
  );
};

export default Profile;
