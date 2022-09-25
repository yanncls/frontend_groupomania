import { useState, useEffect } from "react";
import axios from "../../api/axios";
import "./Author.scss";

const Author = ({ note }) => {
  // Path vers l'api profil
  const PROFIL_URL = "/api/auth/profil";

  // state pour stocker la data
  const [user, setUser] = useState([]);

  // data à envoyer dans le params
  const myUser = note.userId;

  // fetch le profil de l'auteur
  useEffect(() => {
    const userProfil = async () => {
      const res = await axios.get(`${PROFIL_URL}/${myUser}`);
      setUser(res);
    };
    userProfil();
  }, []);

  return (
    <div key={user._id}>
      <div className="author-header">
        <div className="post-profile-cropper">
          <img
            src={user.picture ?? "/default-picture.png"}
            alt="visage"
            className="post-profile-pic-little"
            height={"50px"}
            width={"50px"}
          />
        </div>
        <div className="post-author">
          <h3>
            {user.name} {user.surname}
          </h3>
          <h4>@{user.user}</h4>
        </div>
      </div>
    </div>
  );
};

export default Author;
