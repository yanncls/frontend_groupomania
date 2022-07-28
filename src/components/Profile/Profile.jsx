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
        <h3>Fabien Olicard</h3>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error animi.
        </h4>
      </div>
      <div className="my-profile">
        <Link to="/Profil" style={{ padding: "10px" }}>
          Mon profil
        </Link>
      </div>
    </div>
  );
};

export default Profile;
