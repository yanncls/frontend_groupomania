import React from "react";
import { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

library.add(faPen);

const EditButton = (note) => {
  const navigate = useNavigate();
  // data à isoler
  const thisUser = localStorage.getItem("userId");
  const noteUser = note.note.userId;
  const noteId = note.note._id;
  // states
  const [valid, setValid] = useState(false);

  // essayer de tester le chemin sans l'id puis vérifier si
  // cela peut fonctionner
  const navigateModify = () => {
    navigate(`/modify/${noteId}`);
    // <Link to={{ pathname: `/User/${noteId}`, state: { note: note } }} />;
  };
  // logique pour afficher le boutton edit
  useEffect(() => {
    const validUser = async () => {
      if (thisUser === noteUser) {
        setValid(true);
      }
    };
    (async () => await validUser())();
  });

  return (
    <>
      {valid ? (
        <div>
          <button onClick={navigateModify}>Edit</button>
        </div>
      ) : null}
    </>
  );
};

export default EditButton;
