import "./Profile.scss";
// import BackgroundJpeg from "./milkyway.jpeg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../../api/axios";

const Profile = () => {
  // récupérer l'userId dans le local storage
  const thisUser = localStorage.getItem("userId");
  JSON.stringify(thisUser);
  console.log("thisUser", thisUser);

  // state pour stocker la data
  const [user, setUser] = useState([]);

  // Path vers l'api profil
  const PROFIL_URL = "/api/auth/profil";

  // data à envoyer dans le params
  const myUser = thisUser;
  console.log("myUser", myUser);

  // fetch le profil de l'auteur
  useEffect(() => {
    const userProfil = async () => {
      const res = await axios.get(`${PROFIL_URL}/${thisUser}`);
      setUser(res);
    };
    userProfil();
  }, [thisUser]);

  return (
    <div>
      <div className="background">
        <img src="/milkyway.jpeg" alt="backgroundpng" id="background-img" />
        <div className="image-cropper-top">
          <img
            src={user.picture ?? "/default-picture.png"}
            alt="profilepng"
            className="profile-pic"
          />
        </div>
      </div>
      <div className="attribut">
        <h3>{user.user}</h3>
        <h5>
          {user.name} {user.surname}
        </h5>
        <h4>{user.bio}</h4>
      </div>
      <div className="my-profile">
        <Link to="/Create" style={{ padding: "10px" }}>
          Créer une publication
        </Link>
      </div>
    </div>
  );
};

export default Profile;
