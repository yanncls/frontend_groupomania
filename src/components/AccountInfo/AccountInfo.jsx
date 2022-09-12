import axios from "../../api/axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function AccountInfo() {
  // parametres
  const userId = localStorage.getItem("userId");
  const params = useParams();

  // Path vers l'api profil
  const PROFIL_URL = "/api/auth/profil";

  // states
  const [isRightUser, setIsRightUser] = useState(false);
  const [user, setUser] = useState([]);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  const [update, setUpdate] = useState("");

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

    try {
      const res = await axios(`${PROFIL_URL}/${userId}`, {
        method: "PUT",
        data: { name, bio, surname, email },
        headers: { "Content-Type": "application/json" },
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
        <div className="info-profil">
          <h2>Mes informations personnelles</h2>
          <form action="info-profil-update" onSubmit={handleSubmit}>
            <ul>
              <li>
                Prénom:{" "}
                <input
                  type="text"
                  name="prenom"
                  id="prenom"
                  placeholder={user.surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </li>
              <li>
                Nom:{""}
                <input
                  type="text"
                  name="nom"
                  id="nom"
                  placeholder={user.name}
                  onChange={(e) => setName(e.target.value)}
                />
              </li>
              <li>
                Email:{" "}
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder={user.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </li>
              <li>
                Bio:{" "}
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
            <button>Soumettre</button>
            {/* </Link> */}
          </form>
        </div>
      ) : null}
    </>
  );
}
