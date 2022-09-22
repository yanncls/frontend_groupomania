import { useState, useEffect } from "react";
import axios from "../../api/axios";
import Author from "../Author/Author";
import EditButton from "../EditButton/EditButton";
import LikeButton from "../LikeButton/LikeButton";
import "./index.scss";

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
    allNotes();
  }, []);

  return (
    <div>
      {notes
        .slice(0)
        .reverse()
        .map((note) => {
          return (
            <div key={note._id}>
              <div className="post-card">
                <div className="post-container">
                  <div className="post-content_file">
                    <div className="post-content">
                      <div className="post-card-top">
                        <Author note={note} />
                        <div className="description-flex">
                          <p>{note.description}</p>
                        </div>
                      </div>

                      <div className="imageUrl-container">
                        <img
                          src={note.imageUrl}
                          alt="imageUrl"
                          className="imageUrl"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="post-like-btn">
                    <LikeButton
                      noteId={note._id}
                      noteLike={note.like}
                      usersLiked={note.usersLiked}
                    />
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
