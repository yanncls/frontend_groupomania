import axios from "../../api/axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Photo from "./photo-man.jpeg";
import backgroundPic from "./milkyway.jpeg";
import UploadPicture from "../UploadImg/UploadPicture";

export default function AccountInfo() {
  // parametres
  const userId = localStorage.getItem("userId");
  const params = useParams();

  // Path vers l'api profil
  const PROFIL_URL = "/api/auth/profil";

  // states
  const [isRightUser, setIsRightUser] = useState(false);
  const [user, setUser] = useState([]);

  // DATA TEXT
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  const [update, setUpdate] = useState("");

  // states pictures
  const [imageLink, setImageLink] = useState("");
  const [imageHasChange, setImageHasChange] = useState(false);

  //   condition pour afficher editeur de profil
  useEffect(() => {
    const isAuth = async () => {
      if (params.id === userId) {
        setIsRightUser(true);
      }
    };
    isAuth();
  }, []);

  //   fetch api profil pour afficher les infos du compte
  useEffect(() => {
    const userProfil = async () => {
      const res = await axios.get(`${PROFIL_URL}/${userId}`);
      setUser(res);
    };
    userProfil();
  }, []);

  //   mettre à jour les information du compte
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", imageLink[0]);
    formData.append("name", name);
    formData.append("bio", bio);
    formData.append("surname", surname);
    formData.append("email", email);
    formData.append("user", username);
    // formData.append("userId", userId);
    // console.log("user send", userId);
    // console.log(formData);

    try {
      const res = await axios(`${PROFIL_URL}/${userId}`, {
        method: "PUT",
        data: formData,
        // data: { name, bio, surname, email, username },
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("succes", res);
      setUpdate(res);
    } catch (error) {
      console.log("une erreur submit", error);
    }
  };

  return (
    <>
      {isRightUser ? (
        <div>
          {/* <div className="background"> */}
          {/* <img src={backgroundPic} alt="backgroundpng" id="background-img" /> */}
          <div className="image-cropper-top">
            <img src={user.picture} alt="profilepng" className="profile-pic" />
          </div>
          {/* </div> */}
          <form action="info-profil-update" onSubmit={handleSubmit}>
            <div className="details">
              <UploadPicture
                setImageLink={setImageLink}
                setImageHasChange={setImageHasChange}
              />
              <ul>
                <li>
                  <label htmlFor="user">Pseudo</label>
                  <input
                    type="text"
                    name="user"
                    id="user"
                    placeholder={user.user}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </li>
                <li>
                  <label htmlFor="prenom">Prénom</label>
                  <input
                    type="text"
                    name="prenom"
                    id="prenom"
                    placeholder={user.surname}
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </li>
                <li>
                  <label htmlFor="nom">Nom</label>
                  <input
                    type="text"
                    name="nom"
                    id="nom"
                    placeholder={user.name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </li>
                <li>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder={user.email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </li>
                <li>
                  <label htmlFor="bio">Bio</label>
                  <input
                    type="text"
                    name="bio"
                    id="bio"
                    placeholder={user.bio}
                    onChange={(e) => setBio(e.target.value)}
                  />
                </li>
              </ul>
              {/* <Link to="/dashboard"> */}

              {/* </Link> */}
            </div>
            <button>Modifier</button>
          </form>
        </div>
      ) : null}
    </>
  );
}
