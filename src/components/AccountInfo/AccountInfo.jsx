import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../../api/axios";
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

  //   fetch api profil pour afficher les infos du compte
  useEffect(() => {
    const userProfil = async () => {
      const res = await axios.get(`${PROFIL_URL}/${userId}`);
      setUser(res);
    };
    userProfil();
  }, []);

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

  //   mettre à jour les information du compte
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", imageLink[0]);
    formData.append("name", name);
    formData.append("bio", bio);
    formData.append("surname", surname);
    formData.append("email", email);
    formData.append("username", username);

    try {
      const res = await axios(PROFIL_URL, {
        method: "PUT",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Vos données personnelles sont à jour 👍");
      setUpdate(res);
    } catch (error) {
      console.log("une erreur submit", error);
    }
  };

  return (
    <>
      {isRightUser ? (
        <div className="modify-card">
          <h2>Modifier mon profil</h2>
          <div className="image-cropper-top_modify">
            <img src={user.picture} alt="profilepng" className="profile-pic" />
          </div>
          <form
            action="info-profil-update"
            onSubmit={handleSubmit}
            className="form-info"
          >
            <div className="details">
              <UploadPicture
                setImageLink={setImageLink}
                setImageHasChange={setImageHasChange}
              />
              <ul>
                <li>
                  {/* <label htmlFor="user">Pseudo</label> */}
                  <input
                    type="text"
                    name="user"
                    id="user"
                    placeholder={user.user}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </li>
                <li>
                  {/* <label htmlFor="prenom">Prénom</label> */}
                  <input
                    type="text"
                    name="prenom"
                    id="prenom"
                    placeholder={user.surname}
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </li>
                <li>
                  {/* <label htmlFor="nom">Nom</label> */}
                  <input
                    type="text"
                    name="nom"
                    id="nom"
                    placeholder={user.name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </li>
                <li>
                  {/* <label htmlFor="email">Email</label> */}
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder={user.email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </li>
                <li>
                  {/* <label htmlFor="bio">Bio</label> */}
                  <input
                    type="text"
                    name="bio"
                    id="bio"
                    placeholder={user.bio}
                    onChange={(e) => setBio(e.target.value)}
                  />
                </li>
              </ul>
            </div>
            <button className="info-submit">Modifier</button>
          </form>
        </div>
      ) : null}
    </>
  );
}
