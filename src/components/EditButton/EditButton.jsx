import React from "react";
import axios from "../../api/axios";
import { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./EditButton.scss";
library.add(faPen);

const EditButton = (note) => {
  const navigate = useNavigate();

  // Path vers l'api profil
  const PROFIL_URL = "/api/auth/profil";

  // data à isoler
  const thisUser = localStorage.getItem("userId");
  const noteUser = note.note.userId;
  const noteId = note.note._id;

  // states
  const [valid, setValid] = useState(false);

  // recupere
  const [auth, setAuth] = useState([]);

  // essayer de tester le chemin sans l'id puis vérifier si
  // cela peut fonctionner
  const navigateModify = () => {
    navigate(`/modify/${noteId}`);
  };
  // logique pour afficher le boutton edit
  // fetch user
  useEffect(() => {
    const userProfil = async () => {
      const res = await axios.get(`${PROFIL_URL}/${thisUser}`);
      setAuth(res);
    };
    userProfil();
  }, []);

  useEffect(() => {
    const validUser = async () => {
      if (thisUser === noteUser || auth.isAdmin === true) {
        setValid(true);
      }
    };
    (async () => await validUser())();
  });

  return (
    <>
      {valid ? (
        <div className="Edit_Button">
          <button onClick={navigateModify}>
            <FontAwesomeIcon icon={faPen} className="faPen" />
          </button>
        </div>
      ) : null}
    </>
  );
};

export default EditButton;
