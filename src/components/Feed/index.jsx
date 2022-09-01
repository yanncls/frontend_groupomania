import "./index.scss";
import LikeBtn from "./like.svg";
import FilePost from "./sttropez.jpeg";
import { useState, useEffect } from "react";
import axios from "../../api/axios";
import Author from "../Author/Author";
import EditButton from "../EditButton/EditButton";

const Feed = () => {
  // récupérer l'userId dans le local storage
  const thisUser = localStorage.getItem("userId");
  JSON.stringify(thisUser);

  // Path vers api notes
  const API_URL = "/api/notes";

  // states notes
  const [notes, setNotes] = useState([]);

  // fetch api pour récupérer les publications
  useEffect(() => {
    const allNotes = async () => {
      const res = await axios.get(API_URL);
      setNotes(res);
    };
    (async () => await allNotes())();
  }, []);

  return (
    <div>
      {notes.map((note) => {
        return (
          <div key={note._id}>
            <div className="post-card">
              <div className="post-card-top">
                <Author note={note} />
              </div>
              <div className="post-container">
                <div className="post-content_file">
                  <div className="post-content">
                    <p>{note.description}</p>
                    <img src={FilePost} alt="st tropez" />
                  </div>
                </div>
                <div className="post-like-btn">
                  <button>
                    <img src={LikeBtn} alt="like" />
                  </button>
                  <p>0</p>
                  <EditButton note={note} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Feed;
